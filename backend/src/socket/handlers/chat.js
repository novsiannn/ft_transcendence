const userTracker = require('../utils/userTracker');
const chatService = require('../../services/chat.service.js');
const Message = require('../../../db/models/MessageModel');
const Chat = require('../../../db/models/ChatModel');

// function initialize(io){
//     io.on('connection', function(socket) {
//         socket.on('chat:join', function(chatId) {
//             socket.join('chat_' + chatId);
//             console.log('User' + socket.user.id + 'joined chat:', chatId);
//         })
//     })

// }

function initialize(io) {
    io.on('connection', function (socket) {

        socket.on('chat:join', function (chatId) {
            socket.join('chat_' + chatId);
            console.log('User ' + socket.user.id + ' joined chat ' + chatId);
        });

        socket.on('chat:sendMessage', async function (data) {
            try {
                const chatId = data.chatId;
                const receiverId = data.receiverId;
                const content = data.content;
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
                    chatId: chatId,
                    senderId: senderId,
                    receiverId: receiverId,
                    content: content,
                    createdAt: newMessage.createdAt,
                };

                socket.to('chat_' + chatId).emit('chat:newMessage', messageData);

                socket.emit('chat:messageSent', messageData);

            } catch (err) {
                console.error('chat:sendMessage error', err);
            }
        });

        socket.on('chat:leave', function (chatId) {
            socket.leave('chat_' + chatId);
            console.log('User ' + socket.user.id + ' left chat ' + chatId);
        });

    });
}

module.exports = { initialize };