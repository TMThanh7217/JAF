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

controller.getByOrderIdIncludeProduct = async function(id) {
    return await OrderItem.findAll({
        raw: true,
        where: {
            orderId: id
        },
        include: [{
            model: model.Product,
            attributes: ['id', 'name', 'src']
        }]
    })
}

module.exports = controller;