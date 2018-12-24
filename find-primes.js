// Computes 3.5 million primes in 15 seconds.  Largest prime found
// will be 59,999,999.

// Import dependenceies
var present = require('present');

// Record starting time for performance measurement.
let t0 = present();

// Initialize variables
let max = 60000000; // Maximum number to check if prime.
let sieve = new Array(max);

// Initialize sieve array
for (var i=0; i<=max; i++) {
    sieve[i]=1;
}

// Mark all composite numbers
for (var i=2; i<=max; i++) {
    for (var j=2; i*j<=max; j++) {
         sieve[i*j]=0;
    }
}

// Count number of primes found
var i_max = 2;
let n = 0;
for (var i=2; i<= max; i++){
    if (sieve[i]==1) {
        n++;
        i_max = i;
    }
}

// Compute execution time
let t1 = present();
let t_delta = Math.round((t1-t0)/1000.0);

// Output calcuation results
console.log("Calculated first " + n.toString() + " primes. ")
console.log(n.toString() + "th prime = " + i_max.toString())
console.log("Computation took " + t_delta.toString() + " seconds.")
