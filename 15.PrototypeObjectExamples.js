"using strict";

function Employee(){ };//prototype gets created here (implicity calls new Object())

var emp = new Employee();
emp.prop = "Employee";
console.log(emp.prop);
Employee.prototype.parentProp = "Parent of Employee"
console.log(emp.parentProp); //takes it from the Parent Proto
//emp.__proto__.__proto__.grandParentProp = 
Object.prototype.grandParentProp = "Grand Parent";
//attempt to invoke the propert using emp object will fetch it from Object's properties

console.log(emp.grandParentProp);

//bar also will inherit this property from Object- So it is dangerous
var bar = {};
console.log(bar.grandParentProp);

//Object's proto will always point to null.
console.log(Object.prototype.__proto__ === null)