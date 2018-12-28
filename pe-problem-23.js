// Import dependenceies
var present = require('present');

// Record starting time for performance measurement.
let t0 = present();

// Define function for factorizing a number
function getFactors(n) {
    // Returns all factors of n, given n>1.
    
    // Return empty list for invalid input.
    if (n <= 1) {
        console.log("Warning: Invalid input to getFactors().");
        return [];
    }

    // Initialize variables
    var out = [1, n];

    for (var i=2; i <= Math.round(n/2); i++) {
        if (n%i == 0){
            out.push(i);
        }
    }

    return out.sort();
}



// Main
// ====

// Initialize variables
var factors = [];
var abundantNums = [];

// Compute list of abundant numbers less than 28123
for (var i=2; i<=28123; i++) {
    // Compute factors of i
    factors = getFactors(i);

    // Sum proper factors of i
    var sum = 0;
    for (var j=0; j<factors.length; j++) {
        if (factors[j] != i) {
            sum = sum + factors[j];
        }
    }

    // If i is abundant, push to list.
    if (sum > i) {
        abundantNums.push(i);
    }

}


console.log(abundantNums.slice(0,10));





// Compute execution time
let t1 = present();
let t_delta = Math.round((t1-t0)/1000.0);
console.log("Computation took " + t_delta.toString() + " seconds.")