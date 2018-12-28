

// Import dependenceies
var present = require('present');

// Record starting time for performance measurement.
let t0 = present();


// Define function for computing prime number list
function primeList() {
    // For max=60M, computes 3.5 million primes in 15 seconds
    // For max=10M, computes 67k primes in 2 seconds.

    // Initialize variables
    let max = 10000000; // Maximum number to check if prime.
    let a = new Array(max);
    let out = []

    // Initialize sieve array
    for (var i=0; i<=max; i++) {
        a[i]=1;
    }

    // Mark all composite numbers
    for (var i=2; i<=max; i++) {
        for (var j=2; i*j<=max; j++) {
            a[i*j]=0;
        }
    }

    // Generate output list of prime numbers
    for (var i=2; i<=max; i++) {
        if (a[i]==1) {
            out.push(i)
        }
    }

    return out;
}

// Define function for computing prime sieve
function sieve(max) {
    // Returns array a of length max where a[i]=1 if i is prime.
    // For max=60M, computes 3.5 million primes in 15 seconds
    // For max=10M, computes 67k primes in 2 seconds.

    // Initialize variables
    let a = new Array(max);

    // Initialize sieve array
    for (var i=0; i<=max; i++) {
        a[i]=1;
    }

    // Mark all composite numbers
    for (var i=2; i<=max; i++) {
        for (var j=2; i*j<=max; j++) {
            a[i*j]=0;
        }
    }

    return a;
}

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

// Define function for computing triangular number list
function getTriangNums(n) {
    // Returns a list of the first n triangular numbers
    
    var out = [1];
    var lastVal = 1;
    var newVal = 0;
    for (var i=2; i<=n; i++) {
        newVal = lastVal + i;
        out.push(newVal);
        lastVal = newVal;
    }
    return out;
}



// Produce sample output from problem statement: 28 has >5 factors.
//
// var tris = getTriangNums(7)
// for (var i=0; i < tris.length; i++) {
//     console.log(i, tris[i], getFactors(tris[i]));
// }

// Main
// ====

// Initialize variables
var minTri = 12000
var maxTri = 13000
var minPrint = 300
var tris = getTriangNums(maxTri);

// Compute factors of first maxTri triangular numbers and print any
// with more than minPrint factors

console.log("Computing factors of ", minTri, "th - ", maxTri, "th triangular numbers.")
for (var i=minTri; i<maxTri; i++) {
    var factors = getFactors(tris[i]);
    if (factors.length > minPrint){
        console.log(i,':', tris[i], 'has ', factors.length, 'factors.')
    }
}




// Compute execution time
let t1 = present();
let t_delta = Math.round((t1-t0)/1000.0);
console.log("Computation took " + t_delta.toString() + " seconds.")
