var num=6;
var flag=0;
for(let i=2;i<num;i++){
    if(num%2==0){
        flag+=1;
    }
}
console.log(flag==0?"Prime":"Not Prime");