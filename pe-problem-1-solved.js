//Project Euler.net - Problem 1

let i=1, sum=0;

while (i<1000) {
    if (i%3==0) {
        sum=sum+i;
    } else {
        if (i%5==0) {
            sum=sum+i;
        }
    }
    i=i+1;
}

print(sum);