"using strict";

//empty fucntion
function foo(){};

console.log(foo.prototype)//shd be {} here since no property is there
var fooObj = new foo();
console.log(fooObj.__proto__); //{} here

//add a property
foo.prototype.testProp = "This is from Prototype";
//fooObj's proto object will point to the foo's prototype object.
// will now point to the __prop
console.log(fooObj.__proto__.testProp);//shd be the same
console.log(fooObj.__proto__.testProp); //shd be the same as above

//when looking up properties on objects , interpreter checks them in prototype object , if not present in the orginial object
//example
foo.prototype.sayHello = function(name){
    return "Hello-" + name + "from Prototype";
} ;

//access the function using the object
console.log(fooObj.sayHello("Anusha"));// executes the fn at the proto object
//same for testproperty
console.log(fooObj.testProp);// takes the prop from  the proto object