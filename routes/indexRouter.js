var express = require("express");
const userAuthorizationAPI = require("../APIs/userAuthorization");
var router = express.Router();
var productController = require("../controllers/productController");

router.get("/", (req, res) => {
    productController
        .getTrendingProducts(4)
        .then(products => {
            var trendingProducts = products;
            productController
            .getTrendingFoods()
            .then(products => {
                var trendFoods = products;
                productController
                    .getTrendingDrinks()
                    .then(products => {
                        var trendDrinks = products;
                        var page_data = {
                            title: "JAF - Home",
                            mostLiked : trendingProducts[0],
                            recProducts : trendingProducts.slice(1),
                            dataSlide :  Array.from(trendingProducts.keys()).slice(1),
                            pre_foods: trendFoods,
                            pre_drinks: trendDrinks,
                        }
                        res.render('index', page_data);
                    })
                    .catch(err => res.send("Error: " + err));
            })
            .catch(err => res.send("Error: " + err));
        })
        .catch(err => res.send("Error: " + err));
})

router.post('/like', (req, res) => {
    console.log("like: " + req.body.id)
    productController
        .getByID(req.body.id)
        .then(product => { 
            console.log(product);
            productController
                .updateAttributeOne(product.id, 'like', product.like + 1)
                .then(result => {
                    res.json(product.like + 1);
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
})

module.exports = router