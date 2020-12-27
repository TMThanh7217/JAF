var express = require("express");
var router = express.Router();
var productController = require("../controllers/productController");
var productsArray = require("../APIs/productsArray");
const DEFAULT_ROW_CAP = 3;

router.get("/", (req, res) => {
    productController
        .getAll()
        .then(products => {
            var productsRows = productsArray.getRows(products, DEFAULT_ROW_CAP);
            res.locals.user = req.app.get("user");
            var page_data = {
                title : "JAF - Menu",
                name : "Menu",
                rows : productsRows
            }
            res.render("menu", page_data);
        })
        .catch(err => res.send("Error: " + err));
})

router.get("/drinks", (req, res) => {
    productController
        .getDrinks()
        .then(drinks => {
            var productsRows = productsArray.getRows(drinks, DEFAULT_ROW_CAP);
            res.locals.user = req.app.get("user");
            var page_data = {
                title : "JAF - Drinks",
                name : "Drinks",
                rows : productsRows
            }
            res.render("menu", page_data);
        })
})

router.get("/foods", (req, res) => {
    productController
        .getFoods()
        .then(foods => {
            var productsRows = productsArray.getRows(foods, DEFAULT_ROW_CAP);
            res.locals.user = req.app.get("user");
            var page_data = {
                title : "JAF - Foods",
                name : "Foods",
                rows : productsRows
            }
            res.render("menu", page_data);
        })
})

router.get("/:id", (req, res) => {
    var id = Number(req.params.id);
    productController
        .getByID(id)
        .then(product => {
            res.locals.user = req.app.get("user");
            var page_data = {
                title : `JAF - ${product.name}`,
                product : product,
                comments : {}
            }
            res.render("product", page_data);
        })
})

module.exports = router;