var express = require("express");
var router = express.Router();
var productsController = require("../controllers/productController");

router.get("/manage/products", (req, res) => {
    let userAuthorization = req.app.get("userAuthorization");
    res.locals.userAuthorization = userAuthorization;

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
    res.locals.userAuthorization = req.app.get("userAuthorization");
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
    res.locals.userAuthorization = req.app.get("userAuthorization");
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
    res.locals.userAuthorization = req.app.get("userAuthorization");
    res.render("manage-users", {title: "JAF - Manage Users"});
})

module.exports = router;