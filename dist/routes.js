'use strict';

var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

router.get("/users", function (req, res) {
    var db = new sqlite3.Database("./db/stdb.db");
    var users = [];
    db.serialize(function () {
        db.each("SELECT * FROM users", function (err, row) {
            var user = {};
            user.id = row.id;
            user.name = row.name;
            user.login = row.login;
            user.password = row.password;
            users.push(user);
        }, function () {
            res.json({ "users": users });
        });
    });
    db.close();
});

module.exports = router;