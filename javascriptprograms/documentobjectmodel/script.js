function displayValue(num){
    inpt.value+=num;

} 

function clearBox(){
    inpt.value="";
}

function evaluateExp(){
    let result=eval(inpt.value);
    inpt.value=result;
}

function clearSpace(){
    let result=inpt.value.slice(0,-1);
    inpt.value=result
}