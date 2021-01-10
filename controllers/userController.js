var controller = {};
var bcrypt = require('bcrypt');
var models = require('../models');
var Users = models.User;
const saltRound = 10;

controller.getUserByUsername = username => { 
	return new Promise((resolve, reject) => {
		Users
		.findOne({
			where: { username: username.toLowerCase() },
			raw: true
		})
		.then(user => resolve(user))
		.catch(error => reject(new Error(error)));
	})
};

controller.createUser = function(user) {
	bcrypt.genSalt(saltRound, (err, salt) => {
		bcrypt.hash(user.password, salt, (err, hash) => {
			user.username = user.username.toLowerCase();
			user.password = hash;
			console.log("ok")
			return Users.create(user);
		})
	})
};

controller.findAllUser = () => {
	return new Promise((resolve, reject) => {
		Users
			.findAll({
				raw: true
			})
			.then(users => resolve(users))
			.catch(error => reject(new Error(error)))
	});
};

controller.findById = async function(id) {
	return await Users.findByPk(id, {raw: true});
}

module.exports = controller;