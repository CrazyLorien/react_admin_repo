var mongoose = require('mongoose');

var Permission = new mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Permission', Permission, 'permissions');