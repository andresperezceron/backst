'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rxjs = require('rxjs');

function createObservableFromSqlite(query, db) {
    return _rxjs.Observable.create(function Subscription(observer) {
        try {
            db.each(query, function onEachRow(err, row) {
                if (err) observer.error(err);
                observer.next(row);
            }, function onComplete() {
                observer.complete();
                db.close();
            });
        } catch (e) {
            observer.error(e);
            db.close();
        }
    });
}

exports.default = createObservableFromSqlite;