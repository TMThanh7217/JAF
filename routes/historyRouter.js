var express = require("express");
var router = express.Router();
var orderController = require('../controllers/orderController');
var orderItemController = require('../controllers/orderItemController');
var userAuthorAPI = require('../APIs/userAuthorization'); 
router.get('/', (req, res) => {
    if(!userAuthorAPI.isLoggedIn(res.locals.userAuthorization))
        return res.render('error', {
            title: "JAF - Error",
            errTitle: "Authorization Error",
            errMess: "You don't have permission to access this page!"
        })

    orderController
        .getByUserId(res.locals.userId)
        .then(orderRecords => {
            let orders = [];
            console.log(orderRecords)
            for(let rec of orderRecords) {
                orderItemController
                    .getByOrderIdIncludeProduct(rec.id)
                    .then(orderItemRecords => {
                        rec.items = orderItemRecords;
                        rec.discount = 0;
                        rec.finalPrice = ((1- rec.discount) * Number(rec.totalPrice)).toFixed(2);
                        orders.push(rec);
                    })
                    .catch(err => res.send(err.toString()));
            }

            let page_data = {
                title: "JAF - History",
                orders: orders
            }
            res.render('history', page_data);
        })
        .catch(err => res.send(err.toString()));
})

module.exports = router;