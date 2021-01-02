var express = require("express");
var router = express.Router();
var fs = require('fs');
var path = require('path');
var staffs = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../public/json/staff.json')));
router.get('/', (req, res) => {
    res.locals.userAuthorization = req.app.get('userAuthorization');
    res.render('credit', {staff_infos: staffs});
})

module.exports = router;