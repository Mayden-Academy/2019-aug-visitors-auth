const passwordHash = require('password-hash');
const dbConnector = require('../DbService');


async function verifyPin(pin) {
    let db = await dbConnector();
    let col = db.collection('authentication');
    let hashedPin = await col.find().toArray();
    return passwordHash.verify(pin, hashedPin[0].pin);
}

module.exports.verifyPin = verifyPin;

