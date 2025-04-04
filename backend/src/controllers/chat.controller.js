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

    

}