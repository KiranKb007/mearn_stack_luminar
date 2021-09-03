// let num1="hello",num2="ai",num3="hello",num4=30;
// let res=eval("hello/hai");
// console.log(res);

// console.log("database transaction");
// console.log("file transfer");


// let num1="hello",num2="ai",num3="hello",num4=30;
// try{
// let res=eval("hello/hai");
// console.log(res);
// }
// catch(error){
//     console.log(error.message);
// }
// console.log("database transaction");
// console.log("file transfer");

// var age="hello";

// try{
//     if (isNaN(age)) throw new Error("age must be number")
// }
// catch(error){
//     console.log(error.message);
// }

var phone=892195776;
try{
    if(phone.length!=10) throw new Error("invalid phone number")
}
catch(error){
    console.log(error.message);
}