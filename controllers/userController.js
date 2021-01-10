var controller = {};
var bcrypt = require('bcrypt');
var models = require('../models');
var Users = models.User;
const saltRound = 10;

controller.searchUser = function(username, callback){
	Users.findOne({
		where: { username: username.toLowerCase() },
		raw: true
	}).then(function(this_user) {
		callback(this_user);
	}).catch(error => reject(new Error(error)));
};

controller.createUser = function(user) {
	bcrypt.genSalt(saltRound, (err, salt) => {
		bcrypt.hash(user.password, salt, (err, hash) => {
			user.username = user.username.toLowerCase();
			user.password = hash;
			return Users.create(user);
			/*Users.create(user)
				.then(function(user) {
					// you can now access the newly created user
					console.log('success', user.toJSON());
				})
				.catch(function(err) {
					// print the error details
					console.log(err, request.body.email);
				});*/
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

module.exports = controller;