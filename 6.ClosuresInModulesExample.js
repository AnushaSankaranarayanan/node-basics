//Only way to make properties as private in JS is to change them as closure variables and move them to a fucntion so that fucntion remembers those values 
function createPerson() {
  var firstName ;
  var lastName ;
  var person = {
    "getFirstName": function () {
      return firstName;
    },
    "getLasttName": function () {
      return lastName;
    },
    "setFirstName" : function(name){
      firstName = name;
    },
     "setLastName" : function(name){
      lastName = name;
    }
  };
  return person;
}
var person = createPerson();
//firstname and lastname are not avaiable in this scope. however as they are part of closure - they are available
person.setFirstName("Anusha")
console.log(person.getFirstName());