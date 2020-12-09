const express = require('express');
const fs = require('fs');
const { get } = require('http');
const app = express();
const bodyParser = require("body-parser")
//const router = express.Router();
const port = process.env.PORT || 8000;
app.use(express.static(__dirname + "/public"));
const myApi = require(__dirname + '/public/js/script.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const product = require(__dirname + "/public/js/menu.js");
const userdata = require(__dirname + "/public/js/userdata.js");

let exprHbs = require("express-handlebars");
const { drinks } = require('./public/js/menu');
let hbs = exprHbs.create({
  extname : "hbs",
  defaultLayout : 'layout',
  layoutsDir : __dirname + '/views/layouts/',
  partialsDir : __dirname + '/views/partials/'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use((req, res, next) => {
   res.locals.isLoggedIn = false;
   res.locals.isAdmin = false;
   next();
});

var user_state = false;
var admin_state = false;

app.get('/', (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  var raw_food_data = fs.readFileSync(__dirname + '/public/json/food_menu.json');
  var raw_drink_data = fs.readFileSync(__dirname + '/public/json/drink_menu.json');
  var food_data = JSON.parse(raw_food_data);
  var drink_data = JSON.parse(raw_drink_data);
  var FoodRows = myApi.getRows(food_data, 3);
  var DrinkRows = myApi.getRows(drink_data, 3);
  var page_data = {
    title: "JAF - Home",
    pre_foods: FoodRows[0],
    pre_drinks: DrinkRows[0],
  }
  res.render('index', page_data);
})

app.get('/login', (req, res) => {
    /*user_state = true;
    res.locals.isLoggedIn = user_state;*/
    res.render('login');
})

app.post("/login", (req, res) => {
  console.log("AAaaaAAAAAAAAAAAAAAAAAAAAAAAAa")
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  console.log("username: " + username + " | password: " + password);
  if (username == "user" && password == "user") {
    user_state = true;
    console.log("Log in as user");
    res.redirect("/");
    res.end();
  }
  else if (username == "admin" && password == "admin") {
    admin_state = true;
    console.log("Log in as admin");
    res.redirect("/");
    res.end();
  }
});

app.get('/logout', (req, res) => {
  user_state = false;
  admin_state = false;
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  /*var raw_food_data = fs.readFileSync(__dirname + '/public/json/food_menu.json');
  var raw_drink_data = fs.readFileSync(__dirname + '/public/json/drink_menu.json');
  var food_data = JSON.parse(raw_food_data);
  var drink_data = JSON.parse(raw_drink_data);
  var FoodRows = myApi.getRows(food_data, 3);
  var DrinkRows = myApi.getRows(drink_data, 3);
  var page_data = {
    title: "JAF - Home",
    pre_foods: FoodRows[0],
    pre_drinks: DrinkRows[0],
  }
  res.render('index', page_data);*/
  res.redirect("/");
})

app.get('/credit', (req, res) => {
    res.locals.isLoggedIn = user_state;
    res.locals.isAdmin = admin_state;
    var staffs = JSON.parse(fs.readFileSync(__dirname + "/public/json/staff.json"));
    res.render('credit', {staff_infos: staffs});
})

app.get("/profile", (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  res.render('profile');
})

app.get("/coupon", (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  res.render('coupon');
})

app.get("/cart", (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  res.render('cart');
})

app.get("/notifications", (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  res.render('notifications');
})

app.get("/product", (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  res.render('product');
})

app.get("/manage_product", (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  let list = [];
  for (let prod of product.products) {
      list.push(prod);
  }
  res.render('manage_product', {product: list});
})

app.get("/manage_product_food", (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  let list = [];
  for (let item of product.foods) {
      list.push(item);
  }
  res.render('manage_product', {product: list});
})

app.get("/manage_product_drink", (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  let list = [];
  for (let item of product.drinks) {
      list.push(item);
  }
  res.render('manage_product', {product: list});
})

app.get("/manage_user", (req, res) => {
  res.locals.isLoggedIn = user_state;
  res.locals.isAdmin = admin_state;
  let list = [];
  for (let ele of userdata.userdata) {
      list.push(ele);
  }
  res.render('manage_user', {userdata: list});
})

app.get('/:menu_cate', (req, res) => {
    res.locals.isLoggedIn = user_state;
    res.locals.isAdmin = admin_state;
    var cate = req.params.menu_cate;
    var rows;
    switch (cate) {
        case "foods": {
            rows = myApi.getRows(JSON.parse(fs.readFileSync(__dirname + '/public/json/food_menu.json')), 3);
            break;
        }
        case "drinks": {    
            rows = myApi.getRows(JSON.parse(fs.readFileSync(__dirname + '/public/json/drink_menu.json')), 3);
            break;
        }
        case "menu": {
            rows = myApi.getRows(JSON.parse(fs.readFileSync(__dirname + '/public/json/menu.json')), 3)
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