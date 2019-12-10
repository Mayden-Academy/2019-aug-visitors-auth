const authService = require('../Services/AuthService');
const generateTokenService = require('../Services/generateTokenService');

async function verifyPinGenerateToken(req, res) {
    let pin = req.body.pin;
    // validate
    let verification = await authService.verifyPin(pin);
    if (verification) {
        let token = await generateTokenService.generateToken();
    }
    return res.send(verification);

    // return token
}

module.exports.verifyPinGenerateToken = verifyPinGenerateToken;