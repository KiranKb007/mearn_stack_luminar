// function add(num1,num2){
//     res=num1+num2;
//     return res;
// } 

// console.log(add(10,20));


// function cube(num){
//     res=num**3;
//     return res;
// }
// console.log(cube(10));

// function square(num){
//     res=num**2;
//     return res;
// }
// console.log(square(8));


// function factorial(num){
//     let fact=1
//    for(i=1;i<=num;i++){
//        fact=fact*i;
//    }
//    return fact;
// }
// console.log(factorial(10));

// function factorial(num){
//     if (num==1 || num==0){
//         return 1
//     }
//     else{
//         return num*factorial(num-1)
//     }
// }
// console.log(factorial(3));

// function add(num1,num2,num3){
//     return num1+num2+num3;
// }
// console.log(add(10,20,30));

function add(...args){
    console.log(args);
}
add(10,20,30,40);