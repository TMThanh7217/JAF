var express = require("express");
var router = express.Router();
var controller = require("../controllers/commentController");

router.post('/', (req, res) => {
    let comment = {
        //userId: 7,
        //productID: req.params.id,
        like: true,
        content: req.body.content
    };
    controller
        .add(comment)
        .then(data => {
            res.redirect('/products/' + req.params.id);
        })
        .catch(err => {
            res.send("Error: " + err);
        });
})

module.exports = router;