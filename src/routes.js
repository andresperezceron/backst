const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

router.get("/users", function(req, res) {
    const db = new sqlite3.Database("./db/stdb.db");
    let users = [];
    db.serialize(function() {
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
    db.close();
});

module.exports = router;