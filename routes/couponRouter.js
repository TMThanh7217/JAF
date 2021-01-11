var express = require("express");
var router = express.Router();
var couponController = require('../controllers/couponController');

router.get('/', (req, res) => {
    couponController
        .getAll()
        .then(coupons => {
            for(let c of coupons)
                c.effect = (100 * Number(c.effect)).toFixed(2);
            res.render('coupon', {
                title: "JAF - Coupon",
                coupons: coupons
            });
        })
        .catch(err => res.send(err.toString()));
})

module.exports = router;