var controller = {};
var model = require("../models");
var Order = model.Order;

controller.getAllWithUser = async function() {
    return await Order.findAll({
        raw: true,
        include: [{
            model: model.User,
            attributes: ["phone", "name"]
        }]
    })  
}

controller.getWithItems = async function() {
    return await Order.findAll({
        raw: true,
        include: [{
            model: model.OrderItem,
        }]
    })
}

controller.getByUserId = async function(userId) {
    return await Order.findAll({
        raw: true,
        where: {
            userId: userId
        },
        order: [['createdAt', 'ASC']]
    })
}

controller.getByUserIdWithItems = async function(userId) {
    return await Order.findAll({
        raw: true,
        include: [{
            model: model.OrderItem,
        }],
        where: {
            userId: userId
        },
        order: [['id', 'ASC']]
    })
}

controller.getByIdWithUser = async function(id) {
    return await Order.findOne({
        raw: true,
        include: [{
            model: model.User,
            attributes: ['name', 'phone', 'address']
        }],
        where: {
            id: id
        }
    })
}

controller.create = async function(order) {
    return await Order.create(order);
}

module.exports = controller;