var express = require("express");
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', (req, res) => {
    let id = req.app.get('userId');
    userController
        .findById(id)
        .then(user => {
            //console.log(user);
            res.render('profile', {
                user: user
            });})
        .catch(err => res.send(err.toString()));
})

router.post('/', (req, res) => {
    let female = req.body.femaleBtn;
    let gender = true;
    if (female)
        gender = false;
    console.log(req.body);
    let user = {
        id: req.app.get('userId'),
        name: req.body.nameField,
        email: req.body.emailField,
        gender: gender,
        phone: req.body.phoneField,
    }
    console.log(req.body.nameField);
    console.log(req.body.emailField);
    console.log(req.body.femaleBtn);
    console.log(req.body.phoneField);
    console.log(user);
    userController 
        .updateUser(user)
        .then(
            res.redirect('profile'))
        .catch(err => res.send(err.toString()));
})

module.exports = router;