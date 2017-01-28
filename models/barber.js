var mongoose = require('mongoose');

var BarberSchema = new mongoose.Schema({	
    masterId: String,
  	name: String,	
    services: [Number],
    bookedDates: [{
    	date: { year: Number, month: Number, day: Number },
    	times: [{
    		hour: Number,
    		minute: Number
		}]
    }],
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Barber', BarberSchema);

