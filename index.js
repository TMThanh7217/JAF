const express = require('express');
const fs = require('fs');
const { get } = require('http');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.static(__dirname + "/public"));
const getRows = require(__dirname + '/public/js/script.js').getRows;


let exprHbs = require("express-handlebars");
let hbs = exprHbs.create({
  extname : "hbs",
  defaultLayout : 'layout',
  layoutsDir : __dirname + '/views/layouts/',
  partialsDir : __dirname + '/views/partials/'
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  var raw_food_data = fs.readFileSync(__dirname + '/public/json/food_menu.json');
  var raw_drink_data = fs.readFileSync(__dirname + '/public/json/drink_menu.json');
  var food_data = JSON.parse(raw_food_data);
  var drink_data = JSON.parse(raw_drink_data);
  var FoodRows = getRows(food_data, 3);
  var DrinkRows = getRows(drink_data, 3);
  var page_data = {
    title: "JAF - Home",
    pre_foods: FoodRows[0],
    pre_drinks: DrinkRows[0]
  }
  res.render('index', page_data);
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/credit', (req, res) => {
    var staffs = JSON.parse(fs.readFileSync(__dirname + "/public/json/staff.json"));
    res.render('credit', {staff_infos: staffs});
})

app.get('/:menu_cate', (req, res) => {
    var cate = req.params.menu_cate;
    var rows;
    switch (cate) {
        case "foods": {
            rows = getRows(JSON.parse(fs.readFileSync(__dirname + '/public/json/food_menu.json')), 3);
            break;
        }
        case "drinks": {    
            rows = getRows(JSON.parse(fs.readFileSync(__dirname + '/public/json/drink_menu.json')), 3);
            break;
        }
        case "menu": {
            rows = getRows(JSON.parse(fs.readFileSync(__dirname + '/public/json/menu.json')), 3)
        }
    }
    var page_data = {
        title: "JAF - Menu",
        rows: rows,
        name: cate.toUpperCase()
    }
    res.render('menu', page_data);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})