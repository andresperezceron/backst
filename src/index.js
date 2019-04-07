const express = require('express');
const morgar = require('morgan');
const routes = require('./routes.js');
const cors = require('cors');
const srv = express();
import rxsqlite from './createObservableFromSqlite'

srv.use(morgar("dev"));
srv.use(cors());
srv.use(routes);



//srv.use(express.static("./public"));

srv.listen(6969, function() {
    console.log("Server rulando :6969");
});
