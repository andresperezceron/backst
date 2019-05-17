const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
import createObservableFromSqlite from './createObservableFromSqlite.js'

router.get("/users", function(req, res) {
    const db = new sqlite3.Database("./db/stdb.db");
    const query = "SELECT * FROM users;";
    const stream$ = createObservableFromSqlite(query, db);
    let users = [];

    stream$.subscribe(
        (next) => users.push(next),
        (error) => res.json(error),
        () => res.json(users)
    )
});

router.post("/login", function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const db = new sqlite3.Database("./db/stdb.db");
    const query = "SELECT * FROM users WHERE (SELECT count(*) FROM users u WHERE u.login='" + email + "' " +
        "AND u.password='" + password + "') > 0 AND users.login='" + email + "';";

    db.get(query, (error, row) => {
        const user = row ? {
            id: row.id,
            name: row.name,
            login: row.login,
            password: row.password
        } : null;
        res.json(user);
    });
    db.close();
});

module.exports = router;
