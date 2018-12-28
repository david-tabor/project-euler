

// Import dependenceies
var present = require('present');

// Record starting time for performance measurement.
let t0 = present();


// Define function for computing prime number list
function primeList() {
    // Computes 3.5 million primes in 15 seconds.  Largest prime found
    // will be 59,999,999.

    // Initialize variables
    let max = 60000000; // Maximum number to check if prime.
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

// Define function for factorizing a number given a prime list
function getFactors(n, myPrimeList) {
    // Returns all factors of n, excluding 1 and n, unless additional
    // prime factors exist that are not present in myPrimeList, in
    // which case an empty list will be returned.

    // Initialize variables
    var out = [];
    var thisPrime = 0;
    var checkProd = 1;

    // Iterate through provided list of primes, pushing any 
    // factors to output list
    for (var i=0; i< myPrimeList.length; i++) {
        thisPrime = myPrimeList[i];

        // Exit for loop if next prime to check is bigger than n
        if (thisPrime > n) {
            break;
        }

        // Check for divisibility of thisPrime
        if (n % thisPrime == 0) {
            out.push(thisPrime);
        }
    }

    // Check if n has been fully factorized and return factors if so
    for (var i=0; i<out.length; i++) {
        checkProd = checkProd * out[i];
    }
    if (checkProd==n){
        return out;
    }
    else {
        return [];
    }
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


//Main
primes = primeList();
//console.log(primes.slice(0,10))

//var tris = getTriangNums(5e7);

var tris = getTriangNums(10);

for (var i=0; i < tris.length; i++) {
    console.log(i, tris[i], getFactors(tris[i], primes));
}















// Compute execution time
let t1 = present();
let t_delta = Math.round((t1-t0)/1000.0);
console.log("Computation took " + t_delta.toString() + " seconds.")
