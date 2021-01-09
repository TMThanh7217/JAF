var controller = {};
var models = require('../models');
const user = require('../models/user');
var Comments = models.Comment;

controller.add = (comment) => {
    return new Promise((resolve, reject) => {
        Comments
            .create(comment)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getAll = (productId) => {
    return new Promise((resolve, reject) => {
        Comments
            .findAll({
                where: {
                    productId: productId
                },
                attributes: ['isLiked', 'createdAt', 'content'],
                order: [["createdAt", "DESC"]],
                include: [{
                    model: models.User,
                    attributes: ['name', 'avatar']
                }],
                raw : true
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
}

module.exports = controller;