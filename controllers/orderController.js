var controller = {};
var model = require("../models");
var Order = model.Order;

controller.getAllWithUser = async function() {
    return await Order.findAll({
        raw: true,
        include: [{
            model: model.User,
            attributes: ["username", "name"]
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

controller.create = async function(order) {
    return await Order.create(order);
}

module.exports = controller;