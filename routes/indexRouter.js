var express = require("express");
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

module.exports = router