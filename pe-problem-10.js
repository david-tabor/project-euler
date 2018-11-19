<script>
// https://js.do/samples/hello-world 

// Returns primes below n
function primes_below(n) {
  var output = new Array();
  var sieved_primes = new Array();
  
  // Initialize sieved_primes to ones(n)
  for (var i=0; i<=n; i++){
    sieved_primes[i]=1;
  }
  
  // Identify composite numbers by setting sieved_primes[m*i]=0 
  for (var i=2; i<n; i++) {
    // Can skip marking multiples of know composite numbers
    if (sieved_primes[i]==1) {
      for (var m=2; m*i<n; m++) {
        sieved_primes[m*i]=0      
      } 
    }
  }
  
  // Build output as an array of found primes
  for (var i=2; i<n; i++) {
    if (sieved_primes[i]==1) {output.push(i);}
  }
  
  return output;
} //end function primes_below(n)


// Begin Main
  var primes = primes_below(2000000);
  let sum = 0;
  
  for(var i=0; i<primes.length; i++) {
      sum = sum + primes[i]
  }
  
  //document.write(primes);  
  //document.write(" "); 
  document.write(sum);  
  
  
</script>