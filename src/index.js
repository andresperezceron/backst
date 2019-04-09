const express = require('express');
const morgan = require('morgan');
const routes = require('./routes.js');
const cors = require('cors');
const srv = express();

srv.use(morgan("dev"));
srv.use(cors());
srv.use(routes);

//srv.use(express.static("./public"));

srv.listen(6969, function() {
    console.log("Server rulando :6969");
});
