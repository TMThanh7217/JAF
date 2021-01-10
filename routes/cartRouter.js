var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    let tax = (0.1 * cart.totalPrice);
    let realPrice = (tax + cart.totalPrice);
    let page_data = {
        title: "JAF - Cart",
        isEmpty: res.locals.totalQuantity == 0,
        tax: tax.toFixed(2),
        realPrice: realPrice.toFixed(2)
    }
    res.render('cart', page_data);
});


router.post('/', (req, res, next) => {
    var productID = Number(req.body.id);
    var quantity = isNaN(req.body.quantity) ? 1 : Number(req.body.quantity);
    var productController = require("../controllers/productController");
    productController
        .getByID(productID)
        .then(product => {
            product.price = Number(product.price);
            var cartItem = req.session.cart.add(product, productID, quantity);
            res.json(cartItem);
        })
        .catch(err => next(err));
});

router.post('/remove', (req, res, next) => {
    var productID = Number(req.body.id);
    var cart = req.session.cart;
    cart.remove(productID);
    req.session.cart = cart;
    let tax = (0.1 * cart.totalPrice);
    let realPrice = (tax + cart.totalPrice);
    let result = {};
    result.totalPrice = cart.totalPrice.toFixed(2);
    result.totalQuantity = cart.totalQuantity;
    result.tax = tax.toFixed(2);
    result.realPrice = realPrice.toFixed(2);
    res.json(result);
});

module.exports = router;