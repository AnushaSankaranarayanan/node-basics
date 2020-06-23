"using strict";

//empty fucntion
function foo(){};

console.log(foo.prototype) //link to the prototype
//Double linking
console.log(foo.prototype.constructor); //constructor is the link pointing to the fucntion that created it

var fooObj = new foo();
//new objects can be created using this way also. But this is not recommended.
var fooObj2 = new fooObj.__proto__.constructor();
console.log(fooObj2); //foo {} here
