import { io } from 'socket.io-client';

const socket = io('https://localhost:3000', {
    withCredentials: true,
    auth: {
        token: localStorage.getItem('token') || ''
    }
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

export default socket;