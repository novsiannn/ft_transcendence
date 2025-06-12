const userTracker = require('../utils/userTracker');
const { User } = require('../../../db/models');

let io = null;

async function handleGetOnlineUsers(socket) {
    try {
        const onlineUserIds = userTracker.getAllConnectedUsers();
        if (onlineUserIds.length === 0) {
            socket.emit('online:users:list', []);
            return;
        }

        const onlineUsers = await User.findAll({
            where: {
                id: onlineUserIds
            },
            attributes: ['id', 'username', 'avatar']
        });

        socket.emit('online:users:list', onlineUsers.map(user => ({
            id: user.id,
            username: user.username,
            avatar: user.avatar,
            isOnline: true,
        })));
    } catch (error) {
        console.error('Error getting online users:', error);
        socket.emit('online:error', { error: 'Failed to get online users' });
    }
}

async function handleGetUserStatus(socket, data) {
    try {
        const { userId } = data;
        if (!userId) {
            socket.emit('online:error', { error: 'User ID is required' });
            return;
        }

        const user = await User.findByPk(userId, {
            attributes: ['id', 'username', 'avatar']
        });

        if (!user) {
            socket.emit('online:error', { error: 'User not found' });
            return;
        }

        const status = userTracker.getUserOnlineStatus(parseInt(userId));

        socket.emit('online:user:status', {
            id: user.id,
            username: user.username,
            avatar: user.avatar,
            isOnline: status.isOnline,
        });
    } catch (error) {
        console.error('Error getting user status:', error);
        socket.emit('online:error', { error: 'Failed to get user status' });
    }
}

async function handleGetAllUsersStatus(socket) {
    try {
        const users = await User.findAll({
            attributes: ['id', 'username', 'avatar']
        });

        const userIds = users.map(user => user.id);
        const onlineStatuses = userTracker.getAllUsersOnlineStatus(userIds);

        const usersWithStatus = users.map(user => {
            const status = onlineStatuses.find(s => s.userId === user.id);
            return {
                id: user.id,
                username: user.username,
                avatar: user.avatar,
                isOnline: status ? status.isOnline : false
            };
        });
        socket.emit('online:all:status', usersWithStatus);
    } catch (error) {
        console.error('Error getting all users status:', error);
        socket.emit('online:error', { error: 'Failed to get users status' });
    }
}

function notifyUserOnline(userId) {
    if (io) {
        io.emit('user:online', { userId });
    }
}

function notifyUserOffline(userId) {
    if (io) {
        io.emit('user:offline', { userId });
    }
}

function initialize(ioInstance) {
    io = ioInstance;
    console.log('Online handler initialized');

    io.on('connection', function(socket) {
        socket.on('online:get:users', () => handleGetOnlineUsers(socket));
        socket.on('online:get:user:status', (data) => handleGetUserStatus(socket, data));
        socket.on('online:get:all:status', () => handleGetAllUsersStatus(socket));
    });
}

module.exports = { initialize,  notifyUserOffline, notifyUserOnline };