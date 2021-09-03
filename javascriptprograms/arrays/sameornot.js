var arr1=[1,2,3,4];
var arr2=[3,1,2,7];
let flag=0;

if (arr1.length!=arr2.length){
    flag++;
}
else{
    arr1.sort((num1,num2)=>num1-num2);
    arr2.sort((num1,num2)=>num1-num2);
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            flag++;
            break;
        }
    }
    
}
console.log(flag==0?"Same":"Different");