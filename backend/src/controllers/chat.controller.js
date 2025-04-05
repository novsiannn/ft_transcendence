const Message = require('../../db/models/MessageModel');
const User = require('../../db/models/UserModel');
const chatService = require('../services/chat.service');

class ChatController {

    async getUserChats(req, res) {
        try {
            const userId = req.user.id;
            const chats = await chatService.getUserChats(userId);
            return res.code(200).send(chats);
        }
        catch (error){
            console.error('Error fetching user chats:', error);
            return res.code(500).send({ message: 'Internal server error' });
        }
    }

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
    }

    // async handleSocketConnection(socket, io) {

    // }
    

}