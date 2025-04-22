const userTracker = require('../utils/userTracker');

const notificationHandler = {
    io: null,

    initialize(io) {
        this.io = io;
        console.log('Notification handler initialized');
    },

    sendNotification(userId, type, data) {
        const socket = userTracker.getUserSocket(userId);
        if (socket) {
            socket.emit('notification', {
                type,
                data,
                timedtamp: new Date()
            });
            console.log(`Notification sent to user ${userId}, type: ${type}`);
            return true;
        }
        console.log(`Failed to send notification: User ${userId} is not connected`);
        return false;
    },

    

}