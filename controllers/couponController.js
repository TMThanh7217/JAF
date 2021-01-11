var model = require('../models');
var Coupon = model.Coupon;
var controller = {}

controller.getAll = async function() {
    return await Coupon.findAll({raw: true})
}

module.exports = controller