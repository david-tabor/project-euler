// ProjectEuler.net Problem #3

let target=600851475143;
let output=0;

for(var i=2; i<=target; i++) {
  if (target%i==0) {
    output=i;
    target=target/i;
  }
}

console.log(output);