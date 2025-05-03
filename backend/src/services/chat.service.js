const { Op } = require('sequelize');
const Chat = require('../../db/models/ChatModel');
const Message = require('../../db/models/MessageModel');
const User = require('../../db/models/UserModel');

const ChatService = {
    async findOrCreateChat(user1Id, user2Id) {
        const [u1, u2] = [user1Id, user2Id].sort((a, b) => a - b);
        try {
            const existingChat = await Chat.findOne({
                where: { user_1: u1, user_2: u2 }
            });

            if (existingChat)
                return existingChat;

            const newChat = await Chat.create({
                user_1: u1,
                user_2: u2
            });

            return newChat;
        } catch (error) {
            console.error('Error finding/creating chat:', error);
            throw error;
        }
    },

    async getUserChats(userId) {
        try {
            const chats = await Chat.findAll({
                where: {
                    [Op.or]: [
                        { user_1: userId },
                        { user_2: userId }
                    ]
                },
                include: [
                    {
                        model: Message,
                        as: 'messages',
                        attributes: ['id', 'content', 'senderId', 'createdAt'],
                        order: [['createdAt', 'DESC']],
                        limit: 1,
                        include: [{
                            model: User,
                            as: 'sender',
                            attributes: ['id', 'username', 'avatar']
                        }]
                    }
                ],
                order: [['createdAt', 'DESC']]
            });
            return chats;
        } catch (error) {
            console.error('Error getting user chats:', error);
            throw error;
        }
    },

    async getChatMessages(chatId) {
        try {
            const messages = await Message.findAll({
                where: { chatId },
                order: [['createdAt', 'DESC']],
                include: [{
                    model: User,
                    as: 'sender',
                    attributes: ['id', 'username', 'avatar']
                }]
            });
            return messages;
        } catch (error) {
            console.error('Error getting chat messages:', error);
            throw error;
        }
    },

    async saveMessage({ chatId, senderId, receiverId, content }) {
        try {
            const newMessage = await Message.create({
                chatId,
                senderId,
                receiverId,
                content
            });

            await Chat.update(
                { lastMessageAt: new Date() },
                { where: { id: chatId } }
            );

            return newMessage;
        } catch (error) {
            console.error('Error saving message:', error);
            throw error;
        }
    },

    async markMessageAsRead(chatId, userId) {
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
        } catch (error) {
            console.error('Error marking message as read:', error);
            throw error;
        }
    }
};

module.exports = ChatService;