// const { sendFriendRequest } = require('../../controllers/friendship.controller');
const userTracker = require('../utils/userTracker');
// const friendshipService = require('../../services/friendship.service');

const notificationHandler = {
    io: null,
    
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

    sendFriendGameRequest(opponentId, data) {
        return this.sendNotification(opponentId, 'game_invite', data);
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
    
    
    
    // handlers
    async handleBlockUser(socket, data) {
        try {
            const friendshipService = require('../../services/friendship.service');

            const userId = socket.user.id;
            const { blockedUserId } = data;
            if (!blockedUserId) {
                socket.emit('notification:error', { error: 'Blocked user ID is required' });
                return;
            }
            
            const result  = await friendshipService.blockUser(userId, blockedUserId);
            if (result.error) {
                socket.emit('user:block:error', { error: result.error });
                return;
            }
            
            socket.emit('user:block:success', {
                blockedUserId,
                message: 'User blocked successfully',
            });
            
            const targetSocket = userTracker.getUserSocket(blockedUserId);
            if (targetSocket) {
                targetSocket.emit('user:blocked:by', {
                    blockedByUserId: userId,
                });
            }
        } catch (error) {
            console.error('Error blocking user:', error);
            socket.emit('notification:error', { error: 'Failed to block user' });
        }
    },
    
    async handleUnblockUser(socket, data) {
        try {
            const friendshipService = require('../../services/friendship.service');
            
            const userId = socket.user.id;
            const { blockedUserId } = data;
            if (!blockedUserId) {
                socket.emit('notification:error', { error: 'Unblock user id is required' });
                return;
            }
            
            const result = await friendshipService.unblockUser(userId, blockedUserId);
            if (result.error) {
                socket.emit('user:unblock:error', { error: result.error });
                return;
            }
            
            socket.emit('user:unblock:success', {
                blockedUserId,
                message: "User unblock successfully",
            });

            const targetSocket = userTracker.getUserSocket(blockedUserId);
            if (targetSocket) {
                targetSocket.emit('user:unblocked:by', {
                    unblockedByUserId: userId,
                });
            }
        } catch (error) {
            console.error('Error unblocking user:', error);
            socket.emit('notification:error', { error: 'Failed to unblock user' });
        }
    },

    handleIncomingEvents(socket) {
        socket.on('notification:friendRequest', async (data) => {
            console.log('Received friend request notification from frontend:', data);
        });
    },
    
    initialize(io) {
        this.io = io;
        console.log('Notification handler initialized');
        io.on('connection', (socket) => {
            socket.on('user:block', async data => this.handleBlockUser(socket, data));
            socket.on('user:unblock', async data => this.handleUnblockUser(socket, data));
        });
    },
}

module.exports = notificationHandler;