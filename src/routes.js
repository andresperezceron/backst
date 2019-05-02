const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
import createObservableFromSqlite from './createObservableFromSqlite.js'

router.get("/users", function(req, res) {
    const db = new sqlite3.Database("./db/stdb.db");
    const query = "SELECT * FROM users";
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
    const query = `SELECT COUNT(*) AS count FROM users u WHERE u.login=${email} AND u.password=${password};`;
    db.get(query, (error, row) => res.json(row.count > 0));
});
module.exports = router;
