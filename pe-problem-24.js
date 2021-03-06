
// Define function to check if a number is a valid permuation of the
// set {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
function isPerm(n) {
    var remainder = n;
    var digits = [];
    var uniqueDigits;

    // If n is 8 digits or less, or 11 digits or more, return false
    if (n<=99999999 || n>=1e11) {return false;}

    // If n is 9 digits, add "leading zero" to digits list
    if (n<=999999999) {digits.push(0);}

    // Populate "digits" with list of digits from n
    while (remainder>0) {
        // Push ones digit of "remainder" to list of digits 
        digits.push(remainder % 10);

        // Remove last digit from "remainder"
        remainder = Math.floor(remainder/10);
    }

    // Generate Array of unique values in 'digits'
    uniqueDigits = Array.from(new Set(digits)); 

    // Check if "uniqueDigits" is same length as "digits"
    if (uniqueDigits.length == digits.length && digits.length == 10) {
        return true;
    } else {
        return false;
    }
}

// Initialize variables
var counter = 997920 + 1; // 2*9! + 6*8! + 6*7! + 1

// 2*9! + 1
// 2013456789


// 2*9! + 6*8! + 1
// 2701345689

//  2*9! + 6*8! + 6*7! + 1
// 2780134569

// Iterate through all possible 10 digit numbers in ascending order
// checking if their order generates a valid permutation of 0-9.
for (var i =2780134569 + 1; i<=3000000000; i++) {
    if (isPerm(i)) {
        counter += 1;

        if (counter % 1000 == 0) {
            console.log('reached counter = ', counter)
        }

        if (counter == 1000000) {
            console.log('reached counter=1000000 at i=', i)
            break;
        }
    }
}


