//Project Euler.net - Problem 2

let a=1, b=2, temp=0, max=4000000, sum=0;

//print(a); 
while (b<=max) {
    if (b%2==0) {
        sum=sum+b;
    }
    //print(b);
    temp=b;
    b=b+a;
    a=temp;
}
    
print(sum);