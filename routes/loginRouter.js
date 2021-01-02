var express = require("express");
var router = express.Router();
const controller = require('../controllers/userController');
var bcrypt = require('bcrypt');
var userAuthorizationAPI = require('../APIs/userAuthorization');

router.get("/login", (req, res) => {
    res.locals.user = req.app.get("userAuthorization");
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

router.get('/logout', (req, res) => {
    req.app.set('userAuthorization', userAuthorizationAPI.ANONYMOUS);
    res.locals.user = req.app.get('userAuthorization');
    res.redirect('/');
})

module.exports = router;