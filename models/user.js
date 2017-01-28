var mongoose = require('mongoose');

var User = new mongoose.Schema({	
    name: String,
    password:String,
    vkId:String,
    Images:[]
});

module.exports = mongoose.model('User', User,'users');
