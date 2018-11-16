
// gives answer 931170240 which is not right!

let ans=0, i=10, j=2, flag=0, lim=999999999;


for (i=10; i<lim; i+=10) {
  for (j=2; j<=20; j++) {
    if (i%j!=0) {flag=1;}
  }
  if (flag==0) {ans=i;}
  flag=0
}

console.log(ans)