for(row=1;row<=4;row++){
    let str="";
    for(space=4;space>row;space--){
        str+=" ";
    }
    for(let star=1;star<=row;star++){
        if(row==4 | space+row==5 | space+row==3){
            str+="* ";
        }
    }
    console.log(str);
}

