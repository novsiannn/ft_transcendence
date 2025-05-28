const userTracker = require('../utils/userTracker');
const chatService = require('../../services/chat.service.js');
const Message = require('../../../db/models/MessageModel');
const Chat = require('../../../db/models/ChatModel');
const { validateMessage, isUserAllowedToSendMessage } = require('../utils/chat.utils');

async function handleOpenChats(socket) {
    const userId = socket.user.id;
    socket.join('user_chats_' + userId);
    console.log(`User ${userId} joined user_chats_${userId}`);
}
async function handleCloseChats(socket) {
    const userId = socket.user.id;
    socket.leave('user_chats_' + userId);
    console.log(`User ${userId} left user_chats_${userId}`);
}


async function handleJoin(socket, chatId) {
    socket.join(`chat_${chatId}`);
    console.log(`User ${socket.user.id} joined chat ${chatId}`);
}

async function handleSendMessage(socket, data) {
    try {
        const { chatId, receiverId, content } = data;
        const senderId = socket.user.id;

        if (!chatId || !receiverId || !content) {
            socket.emit('chat:error', { error: 'Missing fields' });
            console.error('chat:sendMessage - missing fields');
            return;
        }
        if (!isUserAllowedToSendMessage(senderId)) {
            socket.emit('chat:error', { error: 'Please wait before sending another message' });
            return;
        }
        const validatedMessage = validateMessage(content);
        if (!validatedMessage.isValid) {
            socket.emit('chat:error', { error: validatedMessage.error });
            return;
        }


        const newMessage = await chatService.saveMessage({
            chatId,
            senderId,
            receiverId,
            content: validatedMessage.sanitizedContent,
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
        socket.to(`user_chats_${receiverId}`).emit('chat:messageReceived', messageData);
        socket.to(`user_chats_${senderId}`).emit('chat:messageSent', messageData);
    } catch (err) {
        console.error('chat:sendMessage error', err);
    }
}

async function handleLeave(socket, chatId) {
    socket.leave(`chat_${chatId}`);
    console.log(`User ${socket.user.id} left chat ${chatId}`);
}

async function initialize(io) {
    io.on('connection', function (socket) {
        socket.on('chat:openChats', () => handleOpenChats(socket));
        socket.on('chat:closeChats', () => handleCloseChats(socket));
        socket.on('chat:join', chatId => handleJoin(socket, chatId));
        socket.on('chat:sendMessage', data => handleSendMessage(socket, data));
        socket.on('chat:leave', chatId => handleLeave(socket, chatId));
    });
}

module.exports = { initialize };