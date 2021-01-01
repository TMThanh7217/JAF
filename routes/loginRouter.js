var express = require("express");
var router = express.Router();
const controller = require('../controllers/userController');

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

    if (username == "admin" && password == "admin"){
        req.app.set('user', ADMIN);  
        console.log("Log in as admin");
        res.redirect("/");
    }
    else {
        controller.searchUser(req.body.username, function(this_user) {
            if (this_user != null){
                if (password == this_user.password) {
                    req.app.set('user', COMMON);
                    console.log("Log in as user");
                    res.redirect("/");
                }
                else {
                    res.render('login');
                }
            }
            else {
                res.render('login');
            }
        });
    }
});

router.get('/logout', (req, res) => {
    req.app.set('user', ANONYMOUS);
    res.locals.user = req.app.get('user');
    res.redirect('/');
})

module.exports = router;