import { io, Socket } from 'socket.io-client';

export function initializeSocket(): Socket {
    console.log('Initializing socket connection');
    
    const token = localStorage.getItem('token');
    if (!token) {
        console.log('NO TOKEN');
    }

    const socket = io('https://localhost:3000', {
        withCredentials: true,
        auth: { token },
        transports: ['websocket'],
        secure: true
    });
    
    socket.on('connect', () => {
        console.log('Connected to server');
    });
    
    socket.on('connect_error', (error) => {
        console.error('Connection error:', error);
    });
    
    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    return socket;
}

export default initializeSocket;
