const { Server } = require('socket.io');
const authMiddleware = require('./middleware/auth');
const notificationHandler = require('./handlers/notification');

function setupWebSockets(server) {
    const io = new Server(server, {
        cors: {
            origin: 'https://localhost:3000', // for testing
            // origin: 'https://localhost:8888',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true,
        },
        secure: true
    });

    io.use(authMiddleware);

    io.on('connection', function(socket) {
        if (!socket.user || !socket.user.id) {
            console.error("Socket connected without valid user:", socket.id);
            socket.disconnect();
            return;
        }

        const userId = socket.user.id;
        console.log(`Socket connected: ${socket.id}, User: ${userId}`);

        userTracker.addUser(userId, socket);

        socket.emit('connected', {
            userId: userId,
            username: socket.user.username //may be errors
        })

        socket.on('disconnect', function() {
            console.log(`Socket disconnected: ${socket.id}, User: ${userId}`);
            userTracker.removeUser(userId, socket);
        });
    });

    notificationHandler.initialize(io);

    io.notification = notificationHandler;

    console.log('WebSocket server initialized');
    
    return io;
}

module.exports = setupWebSockets;