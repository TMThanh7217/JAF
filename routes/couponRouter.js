var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
    res.locals.userAuthorization = req.app.get('userAuthorization');
    res.render('coupon');
})

module.exports = router;