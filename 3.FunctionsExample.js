//classic Function using Declaration
function sayHello(){
  console.log("Hello");
}

//sayHello();

function sayHelloAgain(name, timeOfDay){
  console.log("Hello:" + name +"!Time of Day is :" + timeOfDay);
}
//second argument must be undefined here
sayHelloAgain("Anusha");

//vaid value
sayHelloAgain("Anusha","Afternoon");

//return exmaple
function getStringPassed(name){
  return "Hello " + name;
  //return;
}

var namePassed = getStringPassed("Anusha");
console.log(namePassed);

//Functions using Expression.
var f = function sayHello(){
  console.log("Hello from fucntion created as Expression");
};

f();
//f's type is fucntion here
console.log(typeof f);

//Anonymous way of creating function
var g = function() {
  console.log("Hello from fucntion created Anonymously");
};
g();
//Functions As Arguments
var executorFn = function(fn){
  console.log(fn);
  fn();
}
executorFn(g);
//inline fucntion passing
executorFn( () => {
  console.log("Hello from Inline Fucntion");
});

//Objects hositng fucntion
var myObj = {
  "testProp": true
}

myObj.myMethod = function(){
  console.log("Fucntion inside Object");
}

myObj.myMethod();

//Using this keyword
var person= {
  "firstName" : "Anusha",
  "lastName" : "Sankaranarayanan",
  "getFullName" : function(){
  return this.firstName + " " + this.lastName
}
};

console.log(person.getFullName());

var person2= person;

person = {};
console.log(person2.getFullName());

//Simple example with 1 argument fucntion.
var personWithAddress= {
  "firstName" : "Anusha",
  "lastName" : "Sankaranarayanan",
  "address"  : {
    "street" : "123 JS Steet",
    "city"   :"JS",
    "state" : "JS"
  },
  "getFullName" : function(){
    return this.firstName + " " + this.lastName
  },
  "isFromState" : function(state){
      return(state === this.address.state)
  }
};
console.log(personWithAddress.isFromState("JS"));
console.log(personWithAddress.isFromState("CALIFORNIA"));

//Default Argument(args , and this)
var addFn = function(){
  console.log(arguments);
  var i , sum = 0;
  for (i = 0 ; i <arguments.length ; i++){
    sum += arguments[i];
  }
  return sum;
}
console.log(addFn(10 , 20, 30, 40));

