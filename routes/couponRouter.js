var express = require("express");
var router = express.Router();
var couponController = require('../controllers/couponController');
var couponItemController = require('../controllers/couponItemController');
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

router.post('/check', (req, res) => {
    console.log("log coupon/check")
    let code = req.body.code;
    couponController
        .findByCode(code)
        .then(record => {
            if (record) {
                couponItemController
                    .findByCouponIdIncludeProduct(record.id)
                    .then(productRecords => {
                        let effectedItems = []
                        for(let rec of productRecords)
                            effectedItems.push(rec['Product.id']);
                        
                        console.log(req.session.cart)
                        req.session.cart.applyCoupon(effectedItems, record.effect)
                        console.log(req.session.cart)
                        res.json(true)
                    })
                    .catch(err => res.json(err))
            }
            else res.json(false)
        })
        .catch(err => res.json(err))
})

module.exports = router;