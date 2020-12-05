const express = require('express');
const fs = require('fs');
const { get } = require('http');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + "/root"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/root/html/index.html");
})

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/root/html/index.html");
})

app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + "/root/html/login.html");
})

app.get('/menu.html', (req, res) => {
    res.sendFile(__dirname + "/root/html/menu.html");
})

app.get('/food_menu.html', (req, res) => {
    res.sendFile(__dirname + "/root/html/food_menu.html");
})

app.get('/drink_menu.html', (req, res) => {
    res.sendFile(__dirname + "/root/html/drink_menu.html");
})

app.get('/credit.html', (req, res) => {
    res.sendFile(__dirname + "/root/html/credit.html");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})