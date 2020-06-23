"using strict";

console.log(Object);//Object is a global fucntion like a window

var simple = {};
console.log(simple);

var obj = new Object();
console.log(obj);//another way to create Object. Both ways are one and the same.

Object.prototype.testProp = "This is Property from Object";
//Both the objects (created using {} and created using new Object() points to the same proto. Hence they are 1 and the same.)
console.log(obj.__proto__.testProp);
console.log(simple.__proto__.testProp);
console.log(simple.__proto__ === obj.__proto__)

