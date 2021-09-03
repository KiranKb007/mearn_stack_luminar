var arr1=[10,20,30,40];
var arr2=[9,10,12,20];

// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             console.log(arr1[i]);
//         }
//     }
// }   

let pos1=0;pos2=0;
while(pos1<arr1.length & pos2<arr2.length){
    if(arr1[pos1]==arr2[pos2]){
        console.log(arr1[pos1]);
        pos1++;
        pos2++;
    }
    else if(arr1[pos1]>arr2[pos2]){
        pos2++;
    }
    else{
        pos1++;
    }
}
