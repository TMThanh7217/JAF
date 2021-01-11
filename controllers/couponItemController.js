var model = require('../models');
var CouponItem = model.CouponItem;
var controller = {}

controller.getAll = async function() {
    return await CouponItem.findAll({raw: true})
}

controller.create = async function(couponItem) {
    return await CouponItem.create(couponItem);
}

controller.findByCouponIdIncludeProduct = async function(couponId) {
    return await CouponItem.findAll({
        raw: true,
        attributes: [],
        include:[{
            model: model.Product,
            attributes: ['id']
        }],
        where: {
            couponId: couponId
        }
    })
}

module.exports = controller