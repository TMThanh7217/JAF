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

var user = userAuthorization.ANONYMOUS;
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