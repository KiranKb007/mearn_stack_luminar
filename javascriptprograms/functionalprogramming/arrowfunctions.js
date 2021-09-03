// let add=(num1,num2,num3)=>{
//     let res=num1+num2+num3;
//     return res;
// }
// console.log(add(1,2,3));

// let sub=(num1,num2)=>{
//     let res=num1-num2;
//     return res;
// }
// console.log(sub(10,7));

// let cube=(num)=>{
//     let res=num**3;
//     return res;
// }
// console.log(cube(10));

// let smartsub=(num1,num2)=>num1>num2?num1-num2:num2-num1
// console.log(smartsub(10,15));

// let largest=(num1,num2)=>num1>num2?num1:num2
// console.log(largest(10,17));

// let checknum=(num)=>num%2==0?"even":"odd"
// console.log(checknum(9));

var arr=[1,2,3,4,5,6,7,8,9,10]
var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);

var min=arr.reduce((num1,num2)=>num1>num2?num2:num1)
console.log(min);

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);