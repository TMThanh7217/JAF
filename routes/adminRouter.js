var express = require("express");
var router = express.Router();
var productsController = require("../controllers/productController");


router.get("/manage/products", (req, res) => {
    res.locals.user = req.app.get("user");
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
    res.locals.user = req.app.get("user");
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
    res.locals.user = req.app.get("user");
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
    res.locals.user = req.app.get("user");
    res.render("manage-users", {title: "JAF - Manage Users"});
})

module.exports = router;