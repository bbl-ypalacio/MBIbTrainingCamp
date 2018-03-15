function validateCreditCard(ccNum) {

    //Remove dashes from ccNum string
    var ccNumNoDas = '';
    for (var i = 0; i < ccNum.length; i++) {
        if (ccNum[i] !== '-') {
            ccNumNoDas += ccNum[i];
        }
    }
    // The credit card number must be 16 digits in length
    if (ccNumNoDas.length !== 16) {
        return false;
    }
    // All of the digits must be numbers
    for (var i = 0; i < ccNumNoDas.length; i++) {
        // store the current digit 
        var currentNumber = ccNumNoDas[i];

        // turn the digit from a string to an integer (if the digit is in fact a digit and not anther char)
        currentNumber = Number.parseInt(currentNumber);

        // check that the digit is a number
        if (!Number.isInteger(currentNumber)) {
            return false;
        }
    }
    // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
    var obj = {};
    for (var i = 0; i < ccNumNoDas.length; i++) {
        obj[ccNumNoDas[i]] = true;
    }
    if (Object.keys(obj).length < 2) {
        return false;
    }
    // The final digit of the credit card number must be even
    if (ccNumNoDas[ccNumNoDas.length - 1] % 2 !== 0) {
        return false;
    }
    // The sum of all the digits must be greater than 16
    var sum = 0;
    for (var i = 0; i < ccNumNoDas.length; i++) {
        sum += Number(ccNumNoDas[i]);
    }
    if (sum <= 16) {
        return false;
    }

    return true;
};

/**** tests *****/
console.log('9999-9999-8888-0000 Valid status:'+validateCreditCard('9999-9999-8888-0000')); //true
console.log('6666-6666-6666-1666 Valid status:'+validateCreditCard('6666-6666-6666-1666')); //true
console.log('a923-3211-9c01-1112 Valid status:'+validateCreditCard('a923-3211-9c01-1112')); //false
console.log('4444-4444-4444-4444 Valid status:'+validateCreditCard('4444-4444-4444-4444')); //false
console.log('1211-1111-1111-1112 Valid status:'+validateCreditCard('1211-1111-1111-1112')); //true