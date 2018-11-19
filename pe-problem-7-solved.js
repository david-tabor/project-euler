let max = 104743;
let sieve = new Array(max);

for (var i=0; i<=max; i++) {
    sieve[i]=1;
}

for (var i=2; i<=max; i++) {
    for (var j=2; i*j<=max; j++) {
         sieve[i*j]=0;
    }
}

let n = 0
for (var i=2; i<=max; i++) {
    //writeln(i.toString() + " " + sieve[i].toString());
    if (sieve[i]==1) {
        n++;
        writeln(n.toString() + "th prime: " + i.toString());
    }
}





