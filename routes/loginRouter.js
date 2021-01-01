var express = require("express");
var router = express.Router();

const COMMON = 1;
const ADMIN = 0;
const ANONYMOUS = -1;

router.get("/login", (req, res) => {
    res.locals.user = req.app.get("user");
    res.render('login');
});

router.post('/handle_login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    console.log("username: " + username + " | password: " + password);
    if (username == "user" && password == "user") {
        user = COMMON;
        req.app.set('user', user);
        console.log("Log in as user");
        res.redirect("/");
    }
    else if (username == "admin" && password == "admin") {
        user = ADMIN;
        req.app.set('user', user);
        console.log("Log in as admin");
        res.redirect("/");
    }
    else {
        user = ANONYMOUS;
        req.app.set('user', user);
        res.render('login');
    }
});

router.get('/logout', (req, res) => {
    req.app.set('user', ANONYMOUS);
    res.locals.user = req.app.get('user');
    res.redirect('/');
})

module.exports = router;