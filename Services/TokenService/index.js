const base64 = require('base-64');

function generateToken() {
    return base64.encode(new Date());
}

module.exports.generateToken = generateToken;