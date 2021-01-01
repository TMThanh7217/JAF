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

staffs = JSON.parse(fs.readFileSync(__dirname + "/public/json/staff.json"));

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

//-------------------------------------------------------------------Routing-------------------------------------------------------------------
app.use("/", require("./routes/indexRouter"));

app.use('/', require('./routes/loginRouter'));

app.use('/credit', require('./routes/creditRouter'));

app.use('/profile', require('./routes/profileRouter'));

app.use('/coupon', require('./routes/couponRouter'));

app.use('/help', require('./routes/helpRouter'));

app.use('/cart', require('./routes/cartRouter'));

app.use('/notifications', require('./routes/notificationsRouter'));

app.use('/deal', require('./routes/dealRouter'));

app.use("/admin", require("./routes/adminRouter"));

app.use('/products', require("./routes/productsRouter"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})