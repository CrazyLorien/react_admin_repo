var mongoose = require('mongoose');

var Role = new mongoose.Schema({
    name: String,
    Permissions: []
});

module.exports = mongoose.model('Role', Role, 'roles');