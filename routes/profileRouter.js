var express = require("express");
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', (req, res) => {
    let id = req.app.get('userId');
    userController
        .findById(id)
        .then(user => {
            console.log(user);
            res.render('profile', {
                user: user
            });})
        .catch(err => res.send(err.toString()));

})

module.exports = router;