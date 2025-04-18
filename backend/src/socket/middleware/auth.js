const tokenService = require('../../services/token.service');

function authMiddleware(socket, next) {
    try {
        console.log('Socket authentication attempt:', socket.id);

        const token = socket.handshake.auth.token ||
            (socket.handshake.headers.authorization &&
            socket.handshake.headers.authorization.split(' ')[1]);
        if (!token) {
            console.log('No token provided for socket:', socket.id);
            socket.disconnect();
            return ;
        }

        const userData = tokenService.validateAccessToken(token);
        if (!userData || !userData.id) {
            console.log('Invalid token for socket:', socket.id);
            socket.disconnect();
            return ;
        }
        
        socket.user = userData;
        console.log('Socket authenticated:', socket.id, 'User:', userData.id);
        next();
    } catch (error) {
        console.error('Socket authentication error:', error);
        socket.disconnect();
    }
}

module.exports = authMiddleware;