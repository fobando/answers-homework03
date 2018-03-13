/*
-Number must be 16 digits, all of them must be numbers
-You must have at least two different digits represented (all of the digits cannot be the same)
-The final digit must be even
-The sum of all the digits must be greater than 16
*/

function validateCreditCard(creditCard) {
    
    //var validCard = new Object();
    var validCard = {
        valid: false,
        number: '',
        error: ''
    }    
    
    var numCreditCard = creditCard.replace(/-/g,''); //.replace(new RegExp(tmpstr, 'g'), '*');
    var strLength = numCreditCard.length;

    validCard.number = numCreditCard;
 
    if (strLength != 16) {
        validCard.valid = false;
        validCard.error = 'Invalid length. Must be 16 digits.';
    } else if (isNaN(numCreditCard)) {
        validCard.valid = false;
        validCard.error = 'Invalid type. Must be numbers only.';
    } else if (numCreditCard.substring(strLength - 1) % 2 != 0) {
        validCard.valid = false;
        validCard.error = 'Invalid last digit. Must be an even digit.';
    } else {
        var numArray = numCreditCard.split("");
        var sum = 0;
        var isDiff = false;
        
        for (let index = 0; index < numArray.length; index++) {
            sum += parseInt(numArray[index]);

            if (!isDiff && index < 15) {
                if (numArray[index] != numArray[index + 1]) {
                    isDiff = true;
                }
            }
        }

        if (sum <= 16) {
            validCard.valid = false;
            validCard.error = 'Invalid number. Sum of all the digits must be greater than 16.';
        } else if (!isDiff) {
            validCard.valid = false;
            validCard.error = 'Invalid number. Must have at least two different digits represented.';
        } else {
            validCard.valid = true;
            validCard.error = 'None';
        } 
    }

    return validCard;

}

/*
The following credit card numbers are valid:
• 9999-9999-8888-0000
• 6666-6666-6666-1666
The following credit card numbers are invalid:
• a923-3211-9c01-1112 invalid characters
• 4444-4444-4444-4444 only one type of number
• 1111-1111-1111-1110 sum less than 16
• 6666-6666-6666-6661 odd final number
*/

var cardnumber = validateCreditCard('6666-6666-6666-1666');

console.log('Credit Card: ' + cardnumber.number + ' Valid: ' + cardnumber.valid + ' Error: ' + cardnumber.error);
