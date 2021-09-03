class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    printPerson(){
        console.log(this.name,this.age);
    }
}

var obj= new Person("kiran",24);
obj.printPerson();