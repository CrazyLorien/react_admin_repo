var mongoose = require('mongoose');

var User = new mongoose.Schema({
    name: String,
    password: String,
    Roles: []
});

module.exports = mongoose.model('User', User, 'users');