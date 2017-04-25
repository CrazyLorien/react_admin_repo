var mongodb = require('mongodb');

exports.up = function (db, next) {
    var users = db.collection('users');
    users.insert({ name: 'admin', password: 'a', Roles: [{ name: 'Admin' }] }, next);

};

exports.down = function (db, next) {
    var users = db.collection('users');
    users.findAndModify({ name: 'admin' }, [], {}, { remove: true }, next);
};