var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
    res.locals.user = req.app.get('user');
    res.render('cart');
})

module.exports = router;