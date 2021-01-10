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
        .getUserByUsername(username)
            .then(foundUser => {
                if (foundUser != null){
                    bcrypt.compare(password, foundUser.password, (err, same) => {
                        if (same) {
                            req.app.set('userId', username); // save username here for later use
                            req.app.set('userAuthorization', userAuthorizationAPI.isAdmin(foundUser.authorization) ?
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
            })
            .catch(err => res.send(err.toString()));
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
        .getUserByUsername(user.username)
        .then(foundUser => {
            if (foundUser != null) {
                return res.render('login', {errMessage: 'User name already exists'});
            }
            // create account
            controller.createUser(user)
            return res.render("login", {Message: 'Account created'});
        })
        .catch(err => res.send(err.toString()));    
});

router.get('/logout', (req, res) => {
    req.app.set('userAuthorization', userAuthorizationAPI.ANONYMOUS);
    res.locals.user = req.app.get('userAuthorization');
    res.redirect('/');
})

module.exports = router;