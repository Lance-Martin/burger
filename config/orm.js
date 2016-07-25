var connection = require('connection.js');

var orm = {
  selectAll: function(){
    var queryString = 'SELECT * FROM burgers;';
		connection.query(queryString, function (err, result) {
			console.log(result);
		});
  },
  insertOne: function (burger, devoured){
    var queryString = "INSERT INTO burgers (burger_name, devoured, date) VALUES ("+burger+","+ devoured+", now());";
    connection.query(queryString, function (err, result) {
			console.log(result);
		});
  },
  updateOne: function(name, devour){
    var queryString = "UPDATE burgers SET devoured ='"+ devour + "' WHERE burger_name = '" +name+"';";
  }
};

module.exports = orm;
