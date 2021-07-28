var num1=10; var num2=20;
console.log(`Before Swapping: num1=${num1} and num2=${num2}`);
// temp=num1;
// num1=num2;
// num2=temp;
// console.log(`After swapping: num1=${num1} and num2=${num2}`);

num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log(`After swapping: num1=${num1} and num2=${num2}`);