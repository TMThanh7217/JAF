var controller = {};
var model = require('../models');
var OrderItem = model.OrderItem;

controller.create = async function(item) {
    return await OrderItem.create(item);
}

controller.getByOrderId = async function(orderId) {
    return await OrderItem.findAll({
        raw: true,
        where: {
            orderId: orderId
        },
    })
}

module.exports = controller;