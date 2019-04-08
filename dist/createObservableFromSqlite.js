'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rxjs = require('rxjs');

var _sqlite = require('sqlite3');

var _sqlite2 = _interopRequireDefault(_sqlite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Crea un Observable del resultado de una consulta a una sqlite3
 *
 * @param query
 * @param db
 */
function createObservableFromSqlite(query, db) {
    return _rxjs.Observable.create(function Subscription(observer) {
        try {
            db.each(query, function onEachRow(err, row) {
                if (err) observer.error(err);
                observer.next(row);
            }, function onComplete() {
                observer.complete();
            });
        } catch (e) {
            observer.error(e);
        }
        return function unsubscribe() {};
    });
}

exports.default = createObservableFromSqlite;