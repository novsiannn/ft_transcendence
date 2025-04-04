const { Op } = require('sequelize');
const Chat = require('../../db/models/ChatModel');
const Message = require('../../db/models/MessageModel');
const User = require('../../db/models/UserModel');


    async function findOrCreateChat(user1Id, user2Id){
        try {
            const existingChat = await Chat.findOne({
                where: {
                    [Op.or] : [
                        { user_1: user1Id, user_2: user2Id},
                        { user_1: user2Id, user_2: user1Id}
                    ]
                }
            })

            if(existingChat)
                return existingChat;

            const newChat = await Chat.create({
                user_1: user1Id,
                user_2: user2Id
            })

            return newChat;
        } catch (error) {
            throw error;
        }
    }

    async function getUserChats(userId) {
        try {
            const chats = await Chat.findAll({
                where: {
                    [Op.or]: [
                        { user_1: userId },
                        { user_2: userId }
                    ]
                },
                include: [{
                    model: Message,
                    as: 'message',
                    limit: 1,
                    order: [['createdAt', 'DESC']]
                }]
            })
            return chats;
        } catch (error) {
            throw error;
        }
    }

    async function getChatMessages(req, res) {
        try{
            const { chatId } = req.params;
            const messages = await Message.findAll({
                where: {chatId},
                order: [['createdAt', 'DESC']],
                include: [{
                    model: User,
                    attributes: ['id', 'username', 'avatar']
                }]
            });
            return res.code(200).send(messages); 
        }
        catch(error){
            console.error('Error getting chat messages:', error);
            return res.code(500).send({ error: 'Internal server error' });
        }
    }

    async function saveMessage(chatId, senderId, receiverId, message){
        try{
            const newMessage = await Message.create({
                chatId,
                senderId,
                receiverId,
                message,
                isRead: false
            });
            await Chat.update(
                { lastMessage: content },
                { where: { id: chatId } }
            );
            return newMessage;
        }
        catch(error){
            console.error('Error saving message:', error);
            throw error;
        }       
    }

    async function markMessageAsRead(chatId, userId){
        try {
            await Message.update(
                { isRead: true },
                {
                    where: {
                        chatId,
                        receiverId: userId,
                        isRead: false
                    }
                }
            );
        } catch(error) {
            throw error;
        }
    }


module.exports = { markMessageAsRead, getUserChats, findOrCreateChat, getChatMessages, saveMessage, }
