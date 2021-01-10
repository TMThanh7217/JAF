var express = require("express");
var router = express.Router();
const controller = require('../controllers/userController');
var bcrypt = require('bcrypt');
var userAuthorizationAPI = require('../APIs/userAuthorization');

router.get("/login", (req, res) => {
    
    res.render('login');
});

router.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    console.log("username: " + username + " | password: " + password);

    controller
        .searchUser(username.toLowerCase(), function(user) {
            if (user != null){
                bcrypt.compare(password, user.password, (err, same) => {
                    if (same) {
                        req.app.set('userAuthorization', userAuthorizationAPI.isAdmin(user.authorization) ?
                                                                                        userAuthorizationAPI.ADMIN :
                                                                                        userAuthorizationAPI.COMMON);
                        res.redirect('/');
                    }
                    else {
                        res.locals.userAuthorization = req.app.get('userAuthorization');
                        res.render('login', {
                            title: "JAF - Login",
                            errMessage: "Password or user name is incorrect."
                        })
                    }
                })
            }
            else {
                res.locals.userAuthorization = req.app.get('userAuthorization');
                res.render('login', {
                    title: "JAF - Login",
                    errMessage: "Password or user name is incorrect."
                })
            }
    });
});

router.post('/register', (req, res) => {
    let user = {
        email: req.body.regEmail,
        username: req.body.regUsername,
        password: req.body.regPassword,
        name: "",
        gender: true,
        phone: "",
        avatar: "",
        authorization: 0
    };

    let confirmPassword = req.body.regConfirmPassword;

    // check confirm password
    if (user.password != confirmPassword) {
        return res.render('login', {errMessage: 'Password does not match'});
    }

    // check if user exists
    controller
        .searchUser(user.username , function(userReg) {
            if (userReg != null) {
                return res.render('login', {errMessage: 'User name already exists'});
            }
            // create account
            controller.createUser(user);
            res.render("login", {Message: 'Account created'});
        });    
});

router.get('/logout', (req, res) => {
    req.app.set('userAuthorization', userAuthorizationAPI.ANONYMOUS);
    res.locals.user = req.app.get('userAuthorization');
    res.redirect('/');
})

module.exports = router;