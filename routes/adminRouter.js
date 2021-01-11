var express = require("express");
var router = express.Router();
var productsController = require("../controllers/productController");
var userAuthorizationAPI = require("../APIs/userAuthorization");
var userController = require("../controllers/userController");


router.get("/" , (req, res) => {
    let userAuth = req.app.get("userAuthorization");
    res.locals.userAuthorization = userAuth;
    if (!userAuthorizationAPI.isAdmin(userAuth))
        userAuthorizationAPI.errorPage(req, res);
    
    res.render("admin", {
        title: "JAF - Admin",
        options: [{
            title: "Products Management",
            href: "/admin/manage/products",
            iconClass : "fa fa-cart-arrow-down mr-2"
        }, 
        {
            title: "Users Management",
            href: "/admin/manage/users",
            iconClass: "fa fa-address-card-o mr-2"
        },
        {
            title: "Orders Management",
            href: "/admin/manage/order",
            iconClass: "fa fa-check-square-o mr-2"
        }]
    })
})

router.get("/manage/products", (req, res) => {
    let userAuth = req.app.get("userAuthorization");
    res.locals.userAuthorization = userAuth;
    if (!userAuthorizationAPI.isAdmin(userAuth))
        userAuthorizationAPI.errorPage(req, res);

    productsController
        .getAll()
        .then(products => {
            res.render("manage-products", {
                title: "JAF - Manage Products",
                product : products,
                pageNumber : 1
            });
        })
        .catch(err => res.send("Error: " + err));
})

router.get("/manage/products/foods", (req, res) => {
    let userAuth = req.app.get("userAuthorization");
    res.locals.userAuthorization = userAuth;
    if (!userAuthorizationAPI.isAdmin(userAuth))
        userAuthorizationAPI.errorPage(req, res);

    productsController
        .getFoods()
        .then(products => {
            res.render("manage-products", {
                title: "JAF - Manage Foods",
                product : products,
                pageNumber : 2
            });
        })
        .catch(err => res.send("Error: " + err));
})

router.get("/manage/products/drinks", (req, res) => {
    let userAuth = req.app.get("userAuthorization");
    res.locals.userAuthorization = userAuth;
    if (!userAuthorizationAPI.isAdmin(userAuth))
        userAuthorizationAPI.errorPage(req, res);
    productsController
        .getDrinks()
        .then(products => {
            res.render("manage-products", {
                title: "JAF - Manage Drinks",
                product : products,
                pageNumber : 3
            });
        })
        .catch(err => res.send("Error: " + err));
})

router.get("/manage/users", (req, res) => {
    let userAuth = req.app.get("userAuthorization");
    res.locals.userAuthorization = userAuth;
    if (!userAuthorizationAPI.isAdmin(userAuth))
        userAuthorizationAPI.errorPage(req, res);

    userController
        .findAllUser()
        .then(userdata => {
            res.render("manage-users", {
                title: "JAF - Manage Users",
                userdata : userdata,
            });
        })
        .catch(err => res.send("Error: " + err));
})

router.post("/manage/users/add", (req, res) => {
    let user = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        gender: true,
        phone: req.body.phone,
        address: req.body.address,
        authorization: 0
    };

    // check if user exists
    userController
        .getUserByUsername(user.username)
        .then(foundUser => {
            console.log(foundUser);
            if (foundUser != null) {
                return res.json('User name already exists');
            }
            // create account
            userController.createUser(user);
            return res.json('Account created');
        })
        .catch(err => res.send(err.toString()));    
})

router.post("/manage/users/remove", (req, res) => {
    let id = req.body.userId;
    console.log(id);
    userController.deleteUser(id);
    return res.json('Delete account');
})

module.exports = router;