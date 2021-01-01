var controller = {};

var models = require('../models');
var Users = models.User;

controller.searchUser = function(username, callback){
	Users.findOne({
		where: { username: username },
		raw: true
	}).then(function(this_user) {
		callback(this_user);
	});
};

controller.createUser = function(user){
	Users.create(user)
	.catch(function(error) {
		console.log(error)
	});
};


module.exports = controller;