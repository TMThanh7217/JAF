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

const userAuthorization = require('./APIs/userAuthorization');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

let session = require('express-session');
app.use(session({
  cookie: {httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000},
  secret: "S3cret",
  resave: false,
  saveUninitialized: false
}));

var Cart = require('./controllers/cartController');
app.use((req, res, next) => {
  res.locals.userAuthorization = req.app.get('userAuthorization');
  res.locals.userId = req.app.get('userId');
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  req.session.cart = cart;
  res.locals.totalQuantity = cart.totalQuantity;
  next();
})

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

let hbs = exprHbs.create({
  extname : "hbs",
  defaultLayout : 'layout',
  layoutsDir : __dirname + '/views/layouts/',
  partialsDir : __dirname + '/views/partials/',
  helpers: {
    isLoggedIn : userAuthorization.isLoggedIn,
    isCommon : userAuthorization.isCommon,
    isAdmin : userAuthorization.isAdmin,
    isAnonymous : userAuthorization.isAnonymous,
    isManageProducts : isManageProducts,
    isManageFoods : isManageFoods,
    isManageDrinks : isManageDrinks
  }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//customer_state = 1
//admin_state = 0
//not login = ANONYMOUS
app.set("userAuthorization", userAuthorization.ANONYMOUS);


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

app.use('/history', require('./routes/historyRouter'));

app.use('/cart', require('./routes/cartRouter'));

app.use('/notifications', require('./routes/notificationsRouter'));

app.use('/deal', require('./routes/dealRouter'));

app.use("/admin", require("./routes/adminRouter"));

app.use('/products', require("./routes/productsRouter"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})