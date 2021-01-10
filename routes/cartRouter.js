var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    let page_data = {
        title: "JAF - Cart",
        isEmpty: res.locals.totalQuantity == 0
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
    res.json(cart.getCartItem(productID));
});

module.exports = router;