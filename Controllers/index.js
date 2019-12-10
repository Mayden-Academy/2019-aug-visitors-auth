const authService = require('../Services/AuthService');
const TokenService = require('../Services/TokenService');

async function verifyPinGenerateToken(req, res) {
    let pin = req.body.pin;
    // validate
    let verification = await authService.verifyPin(pin);
    if (verification) {
        let token = TokenService.generateToken();
        res.json({'success': true, 'data': token, 'msg': 'pass code verified'});
    } else {
        res.json({'success': false, 'data': '', 'msg': 'pass code error'});
    }
}

module.exports.verifyPinGenerateToken = verifyPinGenerateToken;