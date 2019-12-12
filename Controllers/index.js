const authService = require('../Services/AuthService');
const TokenService = require('../Services/TokenService');
const Validate = require('../Services/ValidationService');

async function verifyPinGenerateToken(req, res) {
    let responseData = {'success': false, 'data': '', 'msg': 'pin error - not 4 digits'};

    let pin = req.body.pin;

    let validatePin = await Validate.validatePin(pin);

    if (validatePin) {
        try {
            responseData.success = await authService.verifyPin(pin);
            if (responseData.success) {
                responseData.data = await TokenService.generateToken();
                responseData.msg = 'pass code verified';
            }
        } catch(e) {
            responseData.msg = 'unexpected error';
        }
    }
    res.json(responseData);
}

module.exports.verifyPinGenerateToken = verifyPinGenerateToken;