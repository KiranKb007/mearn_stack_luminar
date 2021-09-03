var num=2;
var low=8,upp=28;
var i=1;

while(i<=upp){
    let res=i**num;
    if (res>low & res<upp){
        console.log(i);
    }
    i++;
}