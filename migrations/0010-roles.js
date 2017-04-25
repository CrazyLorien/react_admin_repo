var mongodb = require('mongodb');

exports.up = function (db, next) {
    var roles = db.collection('roles');
    roles.insert({ name: 'Admin', Permissions: ['Read', 'Write', 'Update'] }, next);
};

exports.down = function (db, next) {
    db.roles.drop();
    next();
};