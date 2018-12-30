

// Define function to check for repeating decimals from a string
function FindRepeating(myString, minCycleLength){
    var s = myString;
    var slen = myString.length;
    var clen = minCycleLength;

    // Check for cycle of length 'clen' starting at s[0]
    var target = s.slice(0, clen);

    return 0;
}



// Define function to check 


// Generate string representation of decimal expression
var s = '';
for (var i=2; i<11; i++) {
    console.log('1/', i, ' ',  (1/i).toFixed(15));
    var f = (1/i).toFixed(15);
    s = f.toString();
    s = s.slice(2,s.length-1);
    console.log(s);
}


