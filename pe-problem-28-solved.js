
// Declare variables
var sum = 1;;
var i = 1;
var step = 2;
var sideLength = 1001;
var side = 1;

// 
while (i < Math.pow(sideLength, 2)) {
    //console.log("i = ", i)
    // Add step to i and add to sum.  Do this four times, then increment step.
    for(var side = 1; side<=4; side++) {
        i += step;
        //console.log('side = ', side, '.  Added ', step, 'to i.  i = ', i)
        sum += i;
    } 
    step += 2;
}
console.log('sum = ', sum)