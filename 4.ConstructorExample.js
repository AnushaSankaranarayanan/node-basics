"using strict";
 //usual approach to create objects

function createEmployee(firstName, lastName, gender, designation) {
    var employee = {};
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.gender = gender;
    employee.designation = designation;
    return employee;
}
var employee1 = createEmployee("Michael", "Scott", "M", "Regional Manager");
var employee2 = createEmployee("Lincoln", "Burrows", "M", "Sales Manager");

console.log(employee1.firstName)
//JS new approach
function CreateEmployee(firstName, lastName, gender, designation) {
    //do only the asignments.Object creation and returning will be taken care by the new keyword(using this keyword)
    // var this = {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
    //return this;
}
employee1 = new CreateEmployee("Michael", "Scott", "M", "Regional Manager");
employee2 = new CreateEmployee("Lincoln", "Burrows", "M", "Asst Sales Manager");
console.log(employee2.designation);

