const connectedUsers = new Map();

const userMultipleSockets = new Map();

function addUser(userId, socket) {
    connectedUsers.set(userId, socket);

    if (!userMultipleSockets.has(userId)) {
        userMultipleSockets.set(userId, new Set());
    }
    userMultipleSockets.get(userId).add(socket);

    console.log(`User ${userId} connected, total users: ${connectedUsers.size}`);
}

function removeUser(userId, socket) {
    const userSockets = userMultipleSockets.get(userId);
    if (userSockets) {
        userSockets.delete(socket);

        if (userSockets.size === 0) {
            userMultipleSockets.delete(userId);
            connectedUsers.delete(userId);
            console.log(`User ${userId} disconnected completely, total users: ${connectedUsers.size}`);
        } else if (connectedUsers.get(userId) === socket) {
            const socketsArray = Array.from(userSockets);
            connectedUsers.set(userId, socketsArray[0]);
            console.log(`User ${userId} changed primary socket, remaining connections: ${userSockets.size}`);
        }
    }
}

function isUserConnected(userId) {
    return connectedUsers.has(userId);
}

function getUserSocket(userId) {
    return connectedUsers.get(userId) || null;
}

function getUserSockets(userId) {
    return userMultipleSockets.get(userId) || null;
}

function getAllConnectedUsers() {
    return Array.from(connectedUsers.keys());
}

function getConnectedUsersCount() {
    return connectedUsers.size;
}

module.exports = { addUser, removeUser, isUserConnected, getUserSocket, getUserSockets, getAllConnectedUsers, getConnectedUsersCount };