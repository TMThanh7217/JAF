var controller = {};
var models = require('../models');
var Comments = models.Comment;

controller.add = (comment) => {
    return new Promise((resolve, reject) => {
        Comments
            .create(comment)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;