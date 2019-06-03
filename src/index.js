const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const cors = require('cors');
const srv = express();

srv.use(morgan("dev"));
srv.use(cors());
srv.use(bodyParser.urlencoded({ extended: false }));
srv.use(bodyParser.json());
srv.use(routes);

srv.listen(6969, function() {
    console.log("Server rulando :6969");
});
