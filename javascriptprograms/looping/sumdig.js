var num=1234;
let dig=0,sum=0;

while(num!=0){
    dig=num%10;
    sum=sum+dig;
    num=Math.floor(num/10);
}
console.log(sum);