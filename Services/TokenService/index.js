const base64 = require('base-64');
const dbConnector = require('../DbService');
const fiveMinutes = 300;

async function generateToken() {
    let token = base64.encode(new Date());
    try {
        let stored = await storeToken(token);
        return token;
    } catch(e) {
        return 'unexpected error';
    }
}

async function storeToken(token) {
    let db = await dbConnector();
    let col = db.collection('tokens');
    let expiry = new Date().getTime() + fiveMinutes;
    let storedToken = await col.insertOne({'token': token, 'expiry':  expiry});
    return storedToken;
}

module.exports.generateToken = generateToken;