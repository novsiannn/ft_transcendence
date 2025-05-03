const userTracker = require('../utils/userTracker');
const chatService = require('../../services/chat.service.js');
const Message = require('../../../db/models/MessageModel');
const Chat = require('../../../db/models/ChatModel');

function handleJoin(socket, chatId) {
    socket.join(`chat_${chatId}`);
    console.log(`User ${socket.user.id} joined chat ${chatId}`);
}

async function handleSendMessage(socket, data) {
    try {
        const { chatId, receiverId, content } = data;
        const senderId = socket.user.id;

        if (!chatId || !receiverId || !content) {
            console.error('chat:sendMessage - missing fields');
            return;
        }

        const newMessage = await chatService.saveMessage({
            chatId,
            senderId,
            receiverId,
            content,
        });

        const messageData = {
            id: newMessage.id,
            chatId,
            senderId,
            receiverId,
            content,
            createdAt: newMessage.createdAt,
        };

        socket.to(`chat_${chatId}`).emit('chat:newMessage', messageData);
        socket.emit('chat:messageSent', messageData);
    } catch (err) {
        console.error('chat:sendMessage error', err);
    }
}

function handleLeave(socket, chatId) {
    socket.leave(`chat_${chatId}`);
    console.log(`User ${socket.user.id} left chat ${chatId}`);
}

function initialize(io) {
    io.on('connection', function (socket) {
        socket.on('chat:join', chatId => handleJoin(socket, chatId));
        socket.on('chat:sendMessage', data => handleSendMessage(socket, data));
        socket.on('chat:leave', chatId => handleLeave(socket, chatId));
    });
}

module.exports = { initialize };