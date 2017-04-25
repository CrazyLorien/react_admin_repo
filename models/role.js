var mongoose = require('mongoose');

var Role = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    Permissions: []
});

module.exports = mongoose.model('Role', Role, 'roles');