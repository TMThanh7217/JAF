var express = require("express");
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', (req, res) => {
    res.locals.userAuthorization = req.app.get('userAuthorization');
    let userId = req.app.get('userId');
    userController
        .getUserByUsername(userId)
        .then( user => {
            console.log(user);
            res.render('profile', {
                user: user
            });})
        .catch(err => next(err));

})

module.exports = router;