const { Notification, User } = require('../../db/models');
const { Op } = require('sequelize');
const userTracker = require('../socket/utils/userTracker');

let io = null;

function setIo(ioInstance) {
    io = ioInstance;
}

async function createNotification(userId, type, data, senderId) {
    try {
        const validTypes = ['friend_request', 'friend_accepted', 'game_invite'];
        if (!validTypes.includes(type)) {
            console.error(`Invalid notification type: ${type}`);
        }

        const notification = await Notification.create({
            userId,
            type,
            data,
            senderId,
            isRead: false
        });

        return notification;
    } catch (error) {
        console.error('Error creating notification:', error);
        throw error;
    }
}

async function getNotifications(userId, maxCount = 20) {
    try {
        const notifications = await Notification.findAll({
            where: { userId },
            include: [{
                model: User,
                as: 'sender',
                attributes: ['id', 'username', 'avatar'],
            }],
            order: [['createdAt', 'DESC']],
        });

        const hasUnread = notifications.some(notification => !notification.isRead);

        if (notifications.length > maxCount) {
            const notificationsToDelete = notifications.slice(maxCount).map(notification => notification.id);
            if (notificationsToDelete.length > 0) {
                await Notification.destroy({
                    where: {
                        id: notificationsToDelete,
                    }
                });
                console.log(`Deleted ${notificationsToDelete.length} old notifications for user ${userId}`);
            }
        }
        return {
            notifications: notifications.slice(0, maxCount),
            total: notifications.length,
            hasUnread,
        };
    } catch (error) {
        console.error('Error fetching notifications:', error);
        throw error;
    }
}

async function markAsRead(userId) {
    try {
        const [updated] = await Notification.update(
            { isRead: true },
            {
                where: {
                    userId,
                    isRead: false
                }
            }
        );

        return updated;
    } catch (error) {
        console.error('Error marking notification as read:', error);
        throw error;
    }
}

async function deleteNotification(notificationId, userId) {
    try {
        const deleted = await Notification.destroy({
            where: {
                id: notificationId,
                userId
            }
        });

        return deleted > 0;
    } catch (error) {
        console.error('Error deleting notification:', error);
        throw error;
    }
}

module.exports = { setIo, createNotification, getNotifications, markAsRead, deleteNotification };