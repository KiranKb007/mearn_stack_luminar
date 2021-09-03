var pattern="ABABCC";
var word_count={}
for(let char of pattern){
    if(! char in word_count){
        word_count[char]=1;
    }
    else{
        console.log(char);
        break;
    }
}

