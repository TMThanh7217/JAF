var express = require("express");
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', (req, res) => {
    res.locals.userAuthorization = req.app.get('userAuthorization');
    let userId = res.locals.userId;
    userController
        .getUserByUsername(userId)
        .then( user => {
            res.render('profile', user);})
        .catch(err => next(err));

})

module.exports = router;