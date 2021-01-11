var model = require('../models');
var Coupon = model.Coupon;
var controller = {}

controller.getAll = async function() {
    return await Coupon.findAll({raw: true})
}

controller.create = async function(coupon) {
    return await Coupon.create(coupon);
}

controller.findByCode = async function(code) {
    return await Coupon.findOne({raw: true, where: {code: code}})
}

module.exports = controller