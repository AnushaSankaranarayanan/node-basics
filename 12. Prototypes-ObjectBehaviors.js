"using strict";

function Employee(name){
    this.name = name;
}
var emp1 = new Employee("Jim");
var emp2 = new Employee("Pam");

//playPranks is just 1 cope defined in the prototype- Instead of having it in each object
Employee.prototype.playPranks = function(){
    console.log("Prank Played");
}

emp1.playPranks();
var emp3 = new Employee("Sam");
emp3.playPranks();

// fucntion can be created and referred to dynamically and all the objects will have it 
Employee.prototype.greet = function(){
    console.log("Hello");
}

emp1.greet();
emp3.greet();