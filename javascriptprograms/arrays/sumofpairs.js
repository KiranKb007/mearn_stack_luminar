// var arr=[2,3,4,6];

// var sum=10;
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(sum==arr[i]+arr[j]){
//             console.log(arr[i],arr[j]);
//             break;
//         }
//     }
// }

var arr=[2,3,4,5];
var sum=7,flag=0;
var low=0,upp=arr.length-1;

while(low<upp){
    total=arr[low]+arr[upp];
    if(total==sum){
        console.log(arr[low],arr[upp]);
        flag++;
        break;
    }
    else if(total<sum){
        low++;
    }
    else{
        upp++;
    }
}
console.log(flag==0?"Not Found":"")


