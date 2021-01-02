var controller = {}
const { rejects } = require("assert");
const { resolve } = require("path");
var model = require("../models");
var Product = model.Product;
var converter = require("../APIs/convert");

controller.getAll = (sort) => {
    orderQuery = [];
    switch (sort) {
        case "name":
            orderQuery = [["name", "ASC"]];
            break;
        case "like":
            orderQuery = [["like", "DESC"]];
            break;
        case "updatedAt":
            orderQuery = [["updatedAt", "DESC"]];
            break;
        default:
            orderQuery = [["name", "ASC"]];
            break;
    }
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                raw : true,
                order : orderQuery
            })
            .then(products => resolve(products))
            .catch(error => reject(new Error(error))); 
    })
}

controller.getDrinks = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                where: {
                    type : converter.typeToCode("Drink")
                },
                raw : true
            })
            .then(products => resolve(products))
            .catch(error => reject(new Error(error))); 
    })
}

controller.getFoods = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                where: {
                    type : converter.typeToCode("Food")
                },
                raw : true
            })
            .then(products => resolve(products))
            .catch(error => reject(new Error(error))); 
    })
}

controller.getTrendingFoods = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                where: {
                    type : converter.typeToCode("Food")
                },
                order: [
                    ["like", "DESC"]
                ],
                limit: 3,
                raw : true
            })
            .then(products => resolve(products))
            .catch(error => reject(new Error(error))); 
    })
}

controller.getTrendingDrinks = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                where: {
                    type : converter.typeToCode("Drink")
                },
                order: [
                    ["like", "DESC"]
                ],
                limit: 3,
                raw : true
            })
            .then(products => resolve(products))
            .catch(error => reject(new Error(error))); 
    })
}

controller.getTrendingProducts = limit => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                order: [
                    ["like", "DESC"]
                ],
                limit: limit,
                raw : true
            })
            .then(products => resolve(products))
            .catch(error => reject(new Error(error))); 
    })
}

controller.getByID = id => {
    return new Promise((resolve, reject) => {
        Product
            .findOne({
                where: {
                    id : id
                },
                raw : true
            })
            .then(product => resolve(product))
            .catch(error => reject(new Error(error))); 
    })
}

module.exports = controller;