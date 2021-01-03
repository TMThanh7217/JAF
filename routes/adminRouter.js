var express = require("express");
var router = express.Router();
var productsController = require("../controllers/productController");
var userAuthorizationAPI = require("../APIs/userAuthorization");


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
    res.render("manage-users", {title: "JAF - Manage Users"});
})

module.exports = router;