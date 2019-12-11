const authService = require('../Services/AuthService');
const TokenService = require('../Services/TokenService');

async function verifyPinGenerateToken(req, res) {
    let responseData = {'success': false, 'data': '', 'msg': 'pass code error'};
    let pin = req.body.pin;
    // validate (if pin 4 digits fo below otherwise if doeesn't exist or is not 4 numbers sad path)
    // sad path responseData.msg = 'incorrect pin';
    // happy path:
    try {
        responseData.success = await authService.verifyPin(pin);
        if (responseData.success) {
            responseData.data = await TokenService.generateToken();
            responseData.msg = 'pass code verified';
        }
    } catch(e) {
        responseData.msg = 'unexpected error';
    }

    res.json(responseData);

}

module.exports.verifyPinGenerateToken = verifyPinGenerateToken;