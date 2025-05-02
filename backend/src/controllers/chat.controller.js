const Message = require('../../db/models/MessageModel');
const User = require('../../db/models/UserModel');
const chatService = require('../services/chat.service');

const ChatController = {

    async getUserChats(req, res) {
        try {
            const userId = req.user.id;
            if (!userId) {
                return res.code(400).send({ message: 'User ID is required' });
            }
            const chats = await chatService.getUserChats(userId);
            return res.code(200).send(chats);
        }
        catch (error){
            console.error('Error fetching user chats:', error);
            return res.code(500).send({ message: error.message || 'Internal server error' });
        }
    },

    async getChatMessages(req, res) {
        try {
            const {chatId} = req.params;
            if(!chatId)
                return res.code(400).send({ message: 'Chat ID is required' });
         
            const messages = await chatService.getChatMessages(chatId);
            return res.code(200).send(messages);
        }
        catch (error) {
            console.error('Error fetching chat messages:', error);
            return res.code(500).send({ message: 'Internal server error' });
        }
    },

    async findOrCreateChat(req, res) {
        try {
            const userId = req.user.id;
            const { targetUserId } = req.body;
    
            if (!targetUserId) {
                return res.code(400).send({ message: 'Target user ID is required' });
            }
    
            const chat = await chatService.findOrCreateChat(userId, targetUserId);
            return res.code(200).send({ 
                chatId: chat.id,
                user1: chat.user_1,
                user2: chat.user_2
            });
        } catch (error) {
            console.error('Error creating chat:', error);
            return res.code(500).send({ message: 'Internal server error' });
        }
    },
};

module.exports = ChatController;
