const express = require('express');
const fs = require('fs');
const { get } = require('http');
const app = express();
const bodyParser = require("body-parser")
//const router = express.Router();
const port = process.env.PORT || 8000;
app.use(express.static(__dirname + "/public"));
const models = require('./models');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const COMMON = 1;
const ADMIN = 0;
const ANONYMOUS = -1;


function isLoggedIn(user) {
  return user.toString() != (ANONYMOUS.toString());
}

function isAdmin(user) {
  return user.toString() == (ADMIN.toString())
}

function isCommon(user) {
  return user.toString() == (COMMON.toString())
}

function isManageProducts(pageNumber) {
  return pageNumber == 1;
}

function isManageFoods(pageNumber) {
  return pageNumber == 2;
}

function isManageDrinks(pageNumber) {
  return pageNumber == 3;
}

let exprHbs = require("express-handlebars");
const { drinks } = require('./public/js/menu');
let hbs = exprHbs.create({
  extname : "hbs",
  defaultLayout : 'layout',
  layoutsDir : __dirname + '/views/layouts/',
  partialsDir : __dirname + '/views/partials/',
  helpers: {
    isLoggedIn : isLoggedIn,
    isCommon : isCommon,
    isAdmin : isAdmin,
    isManageProducts : isManageProducts,
    isManageFoods : isManageFoods,
    isManageDrinks : isManageDrinks
  }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use((req, res, next) => {
   res.locals.isLoggedIn = false;
   res.locals.isAdmin = false;
   next();
});

var user = ANONYMOUS;
//customer_state = 1
//admin_state = 0
//not login = ANONYMOUS
app.set("user", user);


app.get('/sync', (req, res) => {
  models.sequelize.sync().then(() => {
    res.send("JAFDB sync successfully!!!");
  })
})

app.use("/", require("./routes/indexRouter"));

app.use('/', require('./routes/loginRouter'));


app.get('/credit', (req, res) => {
  res.locals.user = req.app.get('user');
  var staffs = JSON.parse(fs.readFileSync(__dirname + "/public/json/staff.json"));
  res.render('credit', {staff_infos: staffs});
})

app.get("/profile", (req, res) => {
  res.locals.user = req.app.get('user');
  res.render('profile');
})

app.get("/coupon", (req, res) => {
  res.locals.user = req.app.get('user');
  res.render('coupon');
})

app.get("/help", (req, res) => {
  res.locals.user = req.app.get('user');
  res.render('help');
})

app.get("/cart", (req, res) => {
  res.locals.user = req.app.get('user');
  res.render('cart');
})

app.get("/notifications", (req, res) => {
  res.locals.user = req.app.get('user');
  res.render('notifications');
})

app.get("/help", (req, res) => {
  res.locals.user = req.app.get('user');
  res.render('help');
})

app.get("/deal", (req, res) => {
  res.locals.user = req.app.get('user');
  res.render('deal');
})

app.use("/admin", require("./routes/adminRouter"));

app.use('/products', require("./routes/productsRouter"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})