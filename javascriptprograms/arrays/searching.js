var arr=[1,2,3,4,5,6,8,10];
var ele=0;
let low=0,upp=arr.length-1,mid=0,flag=0;

while(low<=upp){
    let mid=Math.floor((low+upp)/2);
    if(ele>arr[mid]){
        low=mid+1;
    }
    else if(ele<arr[mid]){
        upp=mid-1;
    }
    else{
        flag+=1;
        break;
    }
}
console.log(flag==1?"element found":"element not found");