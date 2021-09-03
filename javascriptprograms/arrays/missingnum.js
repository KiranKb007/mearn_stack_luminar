var arr=[1,2,3,4,5,6,7,9,10,11,12];
let count=1;

for (let i=0;i<arr.length;i++){
    if (arr[i]==count){
        count=count+1;
    }
    else{
        console.log(count);
        break;
    }
}
// console.log(count);