var express = require("express");
var router = express.Router();
var productController = require("../controllers/productController");

router.get("/", (req, res) => {
    productController
        .getTrendingFoods()
        .then(products => {
            var trendFoods = products;
            productController
                .getTrendingDrinks()
                .then(products => {
                    var trendDrinks = products;

                    res.locals.user = req.app.get("user");
                    var page_data = {
                        title: "JAF - Home",
                        pre_foods: trendFoods,
                        pre_drinks: trendDrinks,
                    }
                    res.render('index', page_data);
                })
        })
})

module.exports = router