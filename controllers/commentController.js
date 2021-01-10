var controller = {};
var models = require('../models');
const user = require('../models/user');
var Comments = models.Comment;

controller.create = async function (comment) {
        return await Comments.create(comment);
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