
// Define function to shift (in place) all items left  e.g. 0123 -> 1230
function ShiftLeft(myList) {
    var len = myList.length;
    var temp =new Array(len);
    var FirstItem = myList[0];

    for (var i=0; i<len-1; i++) {
        temp[i] = myList[i+1];
    }

    temp[len-1] = FirstItem;
    return temp;
}



// Define function to shift (in place) all items right e.g. 0123 -> 3012
function ShiftRight(myList) {
    var len = myList.length;
    var temp = new Array(len);
    var LastItem = myList[len-1];

    //console.log(LastItem);
    for (var i=0; i<len-1; i++) {
        temp[i+1] = myList[i];
    }

    temp[0] = LastItem;
    
    return temp;
}

var x = ['0', '1', '2'];

console.log(x);
console.log(ShiftLeft(x));
console.log('');

console.log(x);
console.log(ShiftRight(x));
console.log('');

console.log(x);