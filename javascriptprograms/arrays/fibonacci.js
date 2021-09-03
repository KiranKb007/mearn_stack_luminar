var num=5;
let a=0;b=1,c=0;
if(num==1){
    console.log(0);
}
else if(num==2){
    console.log(1);
}
else{
    for(i=3;i<=num;i++){
        c=a+b;
        a=b;
        b=c;
    }
    console.log(c);
}