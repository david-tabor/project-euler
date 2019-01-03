
// Define function to check for a cycle of length n starting a string
function RepeatsAtStart(myStr, n) {
    if (myStr.length >= 2*n) {
        if (myStr.slice(0,n) == myStr.slice(n, 2*n)) {
            return true;
        } else {
            return false;
        }
    } else {
        // if needed, handle partial match case here
        // always false for now
        return false;
    }
}

var s = '1230123000000000';

console.log(s.slice(0,4));

console.log(s.slice(4,8));

console.log(RepeatsAtStart(s,4));

console.log(s.slice(0,4) == s.slice(4,8));
