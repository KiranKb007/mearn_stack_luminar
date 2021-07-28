// var num=123,digit=0,sum=0;
// while(num!=0){
//     digit=num%10
//     sum=sum+digit**3
//     console.log(digit);
//     num=Math.floor(num/10)
// }
// console.log(sum);

var num=153,digit=0,sum=0;
temp=num;
while(num!=0){
    digit=num%10
    sum=sum+digit**3
    num=Math.floor(num/10)
    }
if (temp==sum){
    console.log("Armstrong");
}
else{
    console.log("Not Armstrong");
}


