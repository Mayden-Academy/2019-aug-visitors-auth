const authService = require('../Services/AuthService');

async function verifyPinGenerateToken(req, res) {
    let pin = req.body.pin;
    // validate
    let verification = await authService.verifyPin(pin);
    console.log(verification);
    return res.send(verification);
    // generate token (if verified pin)
    // return token
}

module.exports.verifyPinGenerateToken = verifyPinGenerateToken;