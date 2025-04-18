const { Server } = require('socket.io');
const tokenService = require('../services/token.service');

const connectedUsers = new Map();

function setupWebSockets(server) {
    const io = new Server(server, {
        cors: {
            origin: ['https://localhost:3000', 'https://localhost:8888'], // for testing
            // origin: 'https://localhost:8888',
            methods: ['GET', 'POST'],
            credentials: true,
        },
        secure: true
    });

    io.use(function(socket, next) {
        try {
            const token = socket.handshake.auth.token ||
                (socket.handshake.headers.authorization &&
                socket.handshake.headers.authorization.split(' ')[1]);
            if (!token) {
                socket.disconnect();
                return ;
            }

            const userData = tokenService.validateAccessToken(token);
            if (!userData || !userData.id) {
                socket.disconnect();
                return ;
            }
            
            socket.user = userData;
            next();
        } catch (error) {
            socket.disconnect();
        }
    });

    io.on('connection', function(socket) {
        if (!socket.user || !socket.user.id) {
            console.error("Socket connected without valid user:", socket.id);
            socket.disconnect();
            return;
        }

        const userId = socket.user.id;
        console.log(`Socket connected: ${socket.id}, User: ${userId}`);

        connectedUsers.set(userId, socket);

        socket.on('test', function(data) {
            console.log('Received test event:', data);
            console.log('Currently connected users:', Array.from(connectedUsers.keys()));
            socket.emit('test_response', { 
                message: 'WOOOOOOOOOORLD!))!)!)!)',
                userId: userId
            });        
        });

        socket.on('disconnect', function() {
            console.log(`Socket disconnected: ${socket.id}, User: ${userId}`);

            if (connectedUsers.get(userId) === socket) {
                connectedUsers.delete(userId);
            }
        });
    });
    console.log('WebSocket server initialized');
    
    io.sendToUser = function(userId, eventName, data) {
        const userSocket = connectedUsers.get(userId);
        if (userSocket) {
            userSocket.emit(eventName, data);
            return true;
        }
        return false;
    };

    return io;
}

module.exports = setupWebSockets;