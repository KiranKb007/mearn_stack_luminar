// var arr=[10,11,12,13,14]

// var element=9,flag=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]==element){
//         flag++
//         break;
//     }
// }
// console.log(flag==0?"element not found":"element found");


var arr=[10,11,12,13,14]
var element=13,flag=0;
for(let num of arr){
    if(num==element){
        flag++;
        break;
    }
}
console.log(flag==0?"element not found":"element found");