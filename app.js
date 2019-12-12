const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./Controllers')
const cors = require('cors');
const jsonParser = bodyParser.json();
const app = express();
app.use(cors());
app.post('/verifyPin', jsonParser, controllers.verifyPinGenerateToken);

app.listen(3002, function() {
    console.log('server is running');
})