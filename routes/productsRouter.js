var express = require("express");
var router = express.Router();
var productController = require("../controllers/productController");
var commentController = require("../controllers/commentController");
var productsArray = require("../APIs/productsArray");
const { query } = require("express");
const DEFAULT_ROW_CAP = 3;

router.get("/", (req, res) => {
    console.log(req.query)
    productController
        .getAll(req.query)
        .then(products => {
            var productsRows = productsArray.getRows(products, DEFAULT_ROW_CAP);
            var page_data = {
                title : "JAF - Menu",
                name : "Menu",
                rows: productsRows,
                isEmpty: !Array.isArray(products) || !products.length
            }
            res.render("menu", page_data);
        })
        .catch(err => res.send("Error: " + err));
})

router.get('/search', (req, res) => {
    var keyword = req.query.keyword;
    productController
        .getAll(req.query)
        .then(products => {
            let productsRows = productsArray.getRows(products, DEFAULT_ROW_CAP);
            let page_data = {
                title: "JAF - Search result",
                name: `Search result of "${keyword}"`,
                rows: productsRows,
                isEmpty: !Array.isArray(products) || !products.length
            }
            res.render('menu', page_data);
        })
        .catch(error => res.send(error.toString()));
})

router.get("/:id", (req, res) => {
    var id = Number(req.params.id);
    productController
        .getByID(id)
        .then(product => {
            commentController
                .getAll(id)
                .then(comments =>  {
                    console.log(comments);
                    var page_data = {
                        title : `JAF - ${product.name}`,
                        product : product,
                        comments : comments
                    }
                    res.render("product", page_data);
                })
                .catch(err => {
                    res.json( "AAA: " + err);
                })
        })
        .catch(err => {
            res.send("Error: " + err);
        })
})

module.exports = router;