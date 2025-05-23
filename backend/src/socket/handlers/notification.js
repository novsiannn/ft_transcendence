// const { sendFriendRequest } = require('../../controllers/friendship.controller');
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

//friendship notification and friendship UI
//friendship notification
    sendFriendRequest(addresseeId, requesterInfo) {
        return this.sendNotification(addresseeId, 'friend_request', {
            from: requesterInfo
        });
    },

    sendFriendAccepted(requesterId, addresseeInfo) {
        return this.sendNotification(requesterId, 'friend_accepted', {
            by: addresseeInfo
        });
    },
    
    // friendship UI
    friendRejected(requesterId, addresseeInfo) {
        return this.sendNotification(requesterId, 'friend_rejected', {
            by: addresseeInfo
        });
    },

    friendRequestCancelled(addresseeId, requesterInfo) {
        return this.sendNotification(addresseeId, 'friend_request_cancelled', {
            by: requesterInfo
        });
    },

    friendRemoved(friendId, userInfo) {
        return this.sendNotification(friendId, 'friend_removed', {
            by: userInfo
        });
    },
    
    // add by nikita
    handleIncomingEvents(socket) {
        socket.on('notification:friendRequest', async (data) => {
            console.log('Received friend request notification from frontend:', data);
        });
    }
}

module.exports = notificationHandler;