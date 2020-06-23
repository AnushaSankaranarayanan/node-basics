var name = "Anusha";
if (name == "Anusha") {
  var dept = "Engg";
}
console.log(name);
//dept is not scoped here - so it not printed. Scope gets created inside fucntions and not in blocks
console.log(dept);

function allocateDept() {
  if (name == "Anusha") {
    var department = "Engg";
  }
}

allocateDept();
console.log(name);
//department is not defined here - it is fucntion scoped.
//name is still available though
//console.log(department);


var topVar = 10;
var innerVar = 50;

function foo() {
  var innerVar = 20;
  console.log(innerVar); //20 here(local variable)
}

foo();
console.log(innerVar); //50 here(global variable)

function greeting(name) {
  console.log("Hello" + name); //only the passed in argument is used here - not the global variable
}

greeting("Arthur Dent");

//IIFE Exmaple
(function () {
  var a = 10;
  var b = 20;
  console.log(a + b);
})();

//another way 
(() => {
  console.log("Hello World IIFE")
}
)();



bar = 10; //not declaration - just definition.This is write operation(this will throw an error if written using strict mode)
console.log(bar); // Read operation of previous write - So works fine

//Read and Write operation
var bar1;//only declaration and no definition. So no write operation.
console.log(bar1);//Read operation w/o previous write - wont work here(undefined)

//when creating global variable /fucntions, a property is set to window(global) object in case of browser
var abc = 10;
//console.log(window.abc)

//one more example
var a = 10;
function myFn() {
  var b = a;
  c = 100;
}
myFn();
//even though c is defined in the scope of myFn , there was no declaration. So interpreter creates it in global scope which is accessible from outside of the fucntion..
console.log(c);



//hoisting
//usage comes before declaration. It does not matter because it is 2 step(compile +interpret) process.All variable declarations go to the top of the compiled file which is then used by the interpreter.
x = 10;
console.log(y);
z++;

var x;
var y;
var z;

myFunction(); //fn call before the definition- does not matter

function myFunction() {
  console.log("Hoisting");
}

//hoisting does not work on fucntion expressions. Works only on fucntion declaration.Example
/* myFunction1();//compiler just registers the below variable and when interpretor runs , it is undefined because the defintion is yet to come. 


var myFunction1 = function () {
  console.log("Hoisting fucntion expression");
} */
