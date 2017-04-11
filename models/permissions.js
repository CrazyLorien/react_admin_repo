var mongoose = require('mongoose');

var Permisson = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Permisson', Permisson, 'permissions');