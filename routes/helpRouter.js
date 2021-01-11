var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
  
    res.render('help');
})

router.get('/help1', (req, res) => {
    res.render('help1');
})

module.exports = router;