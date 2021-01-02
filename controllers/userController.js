var controller = {};
var bcrypt = require('bcrypt');
var models = require('../models');
var Users = models.User;
const saltRound = 10;

controller.searchUser = function(username, callback){
	Users.findOne({
		where: { username: username },
		raw: true
	}).then(function(this_user) {
		callback(this_user);
	});
};

controller.createUser = function(user) {
	bcrypt.genSalt(saltRound, (err, salt) => {
		bcrypt.hash(user.password, salt, (err, hash) => {
			return Users.create(user);
		})
	})
};


module.exports = controller;