'use strict';

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