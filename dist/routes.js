'use strict';

var _createObservableFromSqlite = require('./createObservableFromSqlite.js');

var _createObservableFromSqlite2 = _interopRequireDefault(_createObservableFromSqlite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();


router.get("/users", function (req, res) {
    var db = new sqlite3.Database("./db/stdb.db");
    var query = "SELECT * FROM users";

    var stream$ = (0, _createObservableFromSqlite2.default)(query, db);
    var users = [];

    stream$.subscribe(function (next) {
        return users.push(next);
    }, function (error) {
        return res.json(error);
    }, function () {
        return res.json(users);
    });

    /*db.serialize(function() {
        db.each("SELECT * FROM users", function(err, row) {
            let user = {};
            user.id = row.id;
            user.name = row.name;
            user.login = row.login;
            user.password = row.password;
            users.push(user);
        },() => {
            res.json({"users" : users})
        });
    });
    db.close();*/
});

module.exports = router;