'use strict';
var controller = {}
const { rejects } = require("assert");
const { resolve } = require("path");
var model = require("../models");
var Product = model.Product;
var converter = require("../APIs/convert");
const { query } = require("express");
const Op = require('Sequelize').Op

let validCategories = ["0", "1"];

controller.getAll = query => {
    let option = {
        raw : true,
        where : {}
    };
    if (query) {
        let order = [];
        switch (query.order) {
            case "0":
                order = [["name", "ASC"]];
                break;
            case "1":
                order = [["like", "DESC"]];
                break;
            case "2":
                order = [["updatedAt", "DESC"]];
                break;
            case "3":
                order = [["price", "ASC"]];
                break;
            default:
                order = [["name", "ASC"]];
                break;
        }
        option.order = order;

        if (query.category && !isNaN(query.category) && validCategories.includes(query.category))
            option.where.type = Number(query.category)

        if (query.keyword) {
            let keyword = query.keyword;
            option.where[Op.or] = [
                {name : {[Op.iLike]: `%${keyword}%`}},
                {detail : {[Op.iLike]:`%${keyword}%`}} 
            ];
        }
    }

    return new Promise((resolve, reject) => {
        Product
            .findAll(option)
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

controller.updateAttributeOne = (id, attr, value) => {
    let option = { updatedAt: new Date()};
    option[attr] = value;
    return new Promise((resolve, reject) => {
        Product
            .update(option,
                {
                    where : {
                        id : id
                }}
            )
            .then(result => resolve(result))
            .catch(err => reject(new Error(err)));
    });
}

module.exports = controller;