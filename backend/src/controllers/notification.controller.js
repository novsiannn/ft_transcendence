const notificationService = require('../services/notification.service');

const NotificationController = {
    async getNotifications(req, res) {
        try {
            const userId = req.user.id;
            const { limit = 20 } = req.query;

            if (!userId) {
                return res.code(401).send({ error: 'User not found' });
            }

            const result = await notificationService.getNotifications(userId, limit);
            return res.code(200).send(result);
        } catch (error) {
            console.error('Error getting notifications:', error);
            return res.code(500).send({ error: 'Internal server error' });
        }
    },

    async markAsRead(req, res) {
        try {
            const userId = req.user.id;
            const { notificationId } = req.params;

            if (!userId) {
                return res.code(401).send({ error: 'User not found' });
            }
            if (!notificationId) {
                return res.code(400).send({ error: 'Notification ID is required' });
            }

            const success = await notificationService.markAsRead(notificationId, userId);
            if (!success) {
                return res.code(404).send({ error: 'Notification not found' });
            }

            return res.code(200).send({ message: 'Notification marked as read' });
        } catch (error) {
            console.error('Error marking notification as read:', error);
            return res.code(500).send({ error: 'Internal server error' });
        }
    },

    async deleteNotification(req, res) {
        try {
            const userId = req.user.id;
            const { notificationId } = req.params;

            if (!userId) {
                return res.code(401).send({ error: 'User not found' });
            }
            if (!notificationId) {
                return res.code(400).send({ error: 'Notification ID is required' });
            }

            const success = await notificationService.deleteNotification(notificationId, userId);
            if (!success) {
                return res.code(404).send({ error: 'Notification not found' });
            }

            return res.code(204).send();
        } catch (error) {
            console.error('Error deleting notification:', error);
            return res.code(500).send({ error: 'Internal server error' });
        }
    },
};

module.exports = NotificationController;