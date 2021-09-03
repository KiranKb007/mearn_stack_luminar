var num1=16,num2=48;
let temp=0;
if(num1>num2){
    temp=num2;
    num2=num1;
    num1=temp;
}

for(i=1;i<=num1;i++){
    if(num1%i==0 && num2%i==0){
        gcd=i;
    }
}
console.log(gcd);

