class calculator{

    add(){
        console.log("no arg method");
    }
    add(num1){
        console.log("one arg method");
    }
    add(num1,num2){
        console.log("two arg method");
    }
}

var calc= new calculator;
calc.add(10,10);
calc.add(10);
calc.add();