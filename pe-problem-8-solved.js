function isPythag (a,b,c) {
  if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)) {
    return true;
  } else {
    return false;
  }
}

//console.log(isPythag(3,4,5));
//console.log(isPythag(1,1,1));
//console.log(isPythag(5,12,13));


for (var a=1; a<1000; a++) {
  for (var b=a+1; b<1000; b++) {
    for (var c=b+1; c<1000; c++) {
      if (isPythag(a,b,c) && a+b+c==1000) {
        console.log(a.toString() +" " + b.toString() +" " + c.toString())
        console.log(a*b*c)
      }
    }
  }
}
