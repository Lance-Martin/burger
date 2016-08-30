var orm = require('../config/orm.js');

var burger = {
	selectAll: function (cb) {
		orm.selectAll(function (res) {
			cb(res);
		});
	},
	insertOne: function (burger, devoured, cb) {
		orm.insertOne(burger, devoured, function (res) {
      console.log(burger);
      console.log(devoured);
      console.log(res);
			cb(res);
		});
	},
	updateOne: function (burger, devoured, cb) {
		orm.updateOne(burger, devoured, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;
