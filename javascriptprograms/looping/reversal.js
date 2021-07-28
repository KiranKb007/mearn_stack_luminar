var num=987,sum=0,digit=0;
while(num!=0){
    digit=num%10;
    sum=sum*10+digit;
    num=Math.floor(num/10)
}
console.log(sum);