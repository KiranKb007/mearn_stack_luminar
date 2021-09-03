class Person{
    setPerson(age,name){
        this.age=age;
        this.name=name;
    }
    getAge(){
        return this.age;
    }
    getName(){
        return this.name
    }
}

obj1=new Person;
obj2=new Person;
obj1.setPerson(25,"kiran");
obj2.setPerson(30,"Johnson");
console.log(obj1.getName());