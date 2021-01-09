var express = require("express");
var router = express.Router();
var productController = require("../controllers/productController");
var commentController = require("../controllers/commentController");
var productsArray = require("../APIs/productsArray");
const DEFAULT_ROW_CAP = 3;

router.get("/", (req, res) => {
    console.log(req.query)
    productController
        .getAll(req.query)
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

router.get("/:id", (req, res) => {
    var id = Number(req.params.id);
    productController
        .getByID(id)
        .then(product => {
            res.locals.userAuthorization = req.app.get('userAuthorization');
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