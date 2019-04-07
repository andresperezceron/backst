'use strict';

var _createObservableFromSqlite = require('./createObservableFromSqlite');

var _createObservableFromSqlite2 = _interopRequireDefault(_createObservableFromSqlite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var morgar = require('morgan');
var routes = require('./routes.js');
var cors = require('cors');
var srv = express();


srv.use(morgar("dev"));
srv.use(cors());
srv.use(routes);

//srv.use(express.static("./public"));

srv.listen(6969, function () {
    console.log("Server rulando :6969");
});