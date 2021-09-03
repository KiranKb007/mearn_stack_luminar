// class Parent{
//     phone(){
//         console.log("inside parent class method phone");
//     }
// }

// class Child extends Parent{

// }

// var child= new Child();
// child.phone();




class Parent{
    m1(){
        console.log("inside parent m1()");
    }
}

class SubChild extends Parent{
    m2(){
        console.log("inside parent m2()");
    }
}

class Child extends SubChild{
    m3(){
        console.log("inside parent m3()");
    }
}

var child = new Child();
child.m3();
child.m2();
child.m1();

var subchild = new SubChild();
child.m2();
child.m1();   