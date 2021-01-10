var controller = {};
var model = require('../models');
var OrderItem = model.OrderItem;

controller.create = async function(item) {
    return await OrderItem.create(item);
}

module.exports = controller;