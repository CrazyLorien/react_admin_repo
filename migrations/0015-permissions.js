var mongodb = require('mongodb');

exports.up = function (db, next) {
    var permissions = db.collection('permissions');
    permissions.insert({ name: 'Read', description: "can read all part of docs" }, next);
    permissions.insert({ name: 'Write', description: "can write all part of docs" }, next);
    permissions.insert({ name: 'Update', description: "can update all part of docs" }, next);
};

exports.down = function (db, next) {
    db.permissions.drop();
};