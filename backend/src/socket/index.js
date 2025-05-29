const { Server } = require('socket.io');
const authMiddleware = require('./middleware/auth');
const notificationHandler = require('./handlers/notification');
const chatHandler = require('./handlers/chat');
const gameHandler = requere('./handlers/game');
const userTracker = require('./utils/userTracker');

function setupWebSockets(server) {
    const io = new Server(server, {
        cors: {
            // origin: 'https://localhost:3000', // for testing
            origin: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            credentials: true,
        },
        secure: true
    });

    io.use(authMiddleware);

    io.on('connection', function (socket) {
        if (!socket.user || !socket.user.id) {
            console.error("Socket connected without valid user:", socket.id);
            socket.disconnect();
            return;
        }

        const userId = socket.user.id;
        console.log(`Socket connected: ${socket.id}, User: ${userId}`);

        userTracker.addUser(userId, socket);

        //add by novsiann
        notificationHandler.handleIncomingEvents(socket);

        socket.emit('connected', {
            userId: userId,
            username: socket.user.username //may be errors
        })

        socket.on('disconnect', function () {
            console.log(`Socket disconnected: ${socket.id}, User: ${userId}`);
            userTracker.removeUser(userId, socket);
        });
    });

    notificationHandler.initialize(io);
    chatHandler.initialize(io);
    gameHandler.initialize(io);
    io.notification = notificationHandler;

    console.log('WebSocket server initialized');

    return io;
}

module.exports = setupWebSockets;