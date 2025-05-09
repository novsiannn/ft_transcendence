const { Notification, User } = require('../../db/models')
const { Op } = require('sequelize');

let io = null;

function setIo(ioInstance) {
    io = ioInstance;
}