const express = require('express');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var app = express();



app.listen(3000, function() {
    console.log('server is running');
})