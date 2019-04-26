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
    console.log("hoooooola");
    const db = new sqlite3.Database("./db/stdb.db");
    alert(req.body.name);

});
module.exports = router;