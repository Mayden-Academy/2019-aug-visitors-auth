async function validatePin(pin) {
    let validate = false;
    if (pin.length !== 0 && pin.length === 4) {
        validate = true;
    }
    return validate;
}


module.exports.validatePin = validatePin;