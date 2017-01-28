var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({	
    title: String,
    text: String,
    name:String,
    positive: [Boolean],
    saved_at: { type: Date, default: Date.now },
    img_link:String
});

module.exports = mongoose.model('Review', ReviewSchema);
