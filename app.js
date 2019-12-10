const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./Controllers')

const jsonParser = bodyParser.json();
const app = express();

app.post('/verifyPin', jsonParser, controllers.verifyPinGenerateToken);

app.listen(3001, function() {
    console.log('server is running');
})