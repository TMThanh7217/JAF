var express = require("express");
var router = express.Router();
var productController = require("../controllers/productController");
var productsArray = require("../APIs/productsArray");
const DEFAULT_ROW_CAP = 3;

router.get("/", (req, res) => {
    if (req.query.sort == null || req.query.sort == undefined || req.query.sort == "" || isNaN(req.query.sort))
        req.query.sort = 'name';
    else if (Number(req.query.sort) == 0) {
        req.query.sort = 'like';
    }
    else if (Number(req.query.sort) == 1) {
        req.query.sort = 'name';
    }
    else req.query.sort = 'updatedAt';
    productController
        .getAll(req.query.sort)
        .then(products => {
            var productsRows = productsArray.getRows(products, DEFAULT_ROW_CAP);
            res.locals.userAuthorization = req.app.get('userAuthorization');
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
            res.locals.userAuthorization = req.app.get('userAuthorization');
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
            res.locals.userAuthorization = req.app.get('userAuthorization');
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
            res.locals.userAuthorization = req.app.get('userAuthorization');
            var page_data = {
                title : `JAF - ${product.name}`,
                product : product,
                comments : {}
            }
            res.render("product", page_data);
        })
        .catch(err => {
            res.send("Error: " + err);
        })
})

module.exports = router;