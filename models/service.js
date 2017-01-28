var mongoose = require('mongoose');

var ServiceSchema = new mongoose.Schema({	
	serviceId: String,
  	name: String,
  	price: String,
  	link: String,
  	description: String,	
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', ServiceSchema);