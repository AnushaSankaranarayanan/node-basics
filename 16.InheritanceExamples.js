"using strict";

function Employee(name){ this.name = name;
};

Employee.prototype.getName = function(){
    return this.name;
}

var emp = new Employee("Jim");
console.log(emp.getName());

function Manager(name , dept){
    this.name = name;
    this.dept = dept;
};
Manager.prototype.getDept = function(){
    return this.dept;
}
var mgr = new Manager("Mike" , "Sales");
mgr.__proto__.__proto__ = Employee.prototype;//change it from Object to Empolyee hence inheriting will be easy
console.log(mgr.getDept());
console.log(mgr.getName());

Employee.prototype.getSalary = function(){
    return 100;
}
console.log(emp.getSalary());
console.log(mgr.getSalary());
