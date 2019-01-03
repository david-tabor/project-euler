

// Define function to check for repeating decimals from a string
function FindRepeating(myString, minCycleLength){
    var s = myString;
    var slen = myString.length;
    var clen = minCycleLength;

    // Check for cycle of length 'clen' starting at s[0]
    var target = s.slice(0, clen);

    return 0;
}



var excl = [2,3,5,6,9,10,15,18,30,45,90,
    11,22,33,55,66,99,303,330,495,909,990,198,165,101,110]

// Generate string representation of decimal expression
var s = '';
for (var i=2; i<1000; i++) {

    // skip if in excl
    for (var j=0; j<excl.length; j++) {
        if (i == excl[j]) {
            i++;
        }
        if (i == excl[j]) {
            i++;
        }
    }


    //console.log('1/', i, ' ',  (1/i).toFixed(15));
    var f = (1/i).toFixed(15);
    s = f.toString();
    s = s.slice(2,s.length-1);
    //console.log(s);


    // //check for len 7 cycle at index 0
    // if (s.slice(0,4) == s.slice(7, 11) ) {
    //     console.log('len 7? i=', i, ' s=', s)
    //     i += 1;
    //     s = '923048524513413'
    // }

    // //check for len 7 cycle at index 1    
    // if (s.slice(1,5) == s.slice(8, 12)) {
    //     console.log('len 7? i=', i, ' s=', s)
    // }

    //check for len 8 cycle at index 0
    if (s.slice(0,4) == s.slice(8, 12) ) {
        console.log('len 8? i=', i, ' s=', s.slice(0,7), ' ', s.slice(8, s.length))
        i += 1;
        s = '923048524513413'
    }

    //check for len 8 cycle at index 1    
    if (s.slice(1,5) == s.slice(9, 13)) {
        console.log('len 8? i=', i, ' s=', s.slice(0,7), ' ', s.slice(8, s.length))
    }


}


