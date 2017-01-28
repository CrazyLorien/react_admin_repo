var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	date: { year: Number, month: Number, day: Number },
	masterId: String,
	master: String,	
	serviceId: String,
  	service: String,
        client: { firstName: String, lastName: String, phone:String, email:String, customInfo:String},
  	price: Number,
  	note: String,	
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
