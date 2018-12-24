let num=991299;

function isPalindrome (myNum) {
  let s = myNum.toString()
  let l=s.length
  //console.log("s.length=", l)
  for(var i=0; i<l; i++) {
    //console.log(i, s[i], s[l-i-1])
    if (s[i]!=s[l-i-1]) {return false;}
  }
  return true;
}

let i_max=0, j_max=0, max=0;

for(var i=0; i<=9; i++) {
	for(var j=0; j<=9; j++) {
		if (i*j>max && isPalindrome(i*j)) {
			i=i_max;
			j=j_max;
			max=i*j;
		}
	}
}
