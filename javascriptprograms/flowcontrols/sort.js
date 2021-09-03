var num1=20;
var num2=30;
var num3=10;
if (num1>num2){
    num2=num1+num2;
    num1=num2-num1;
    num2=num2-num1;
}
if (num2>num3){
    num3=num2+num3;
    num2=num3-num2;
    num3=num3-num2;
}
if (num1>num2){
    num2=num1+num2;
    num1=num2-num1;
    num2=num2-num1;
}
console.log(num1,num2,num3);