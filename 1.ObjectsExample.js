//inline creation of objects
var myObj = { 
  'prop1' : 'hello',
  'prop2' : 123
};
console.log(myObj);

//another way pof creating objects
var myObj2 = {};
myObj2.prop1 = 'hello';
myObj2.prop2 = 123;

console.log(myObj);

//Dot notation to access properties
console.log(myObj.prop1);
//bracket notation to access properties
console.log(myObj['prop2']);
//type of example
console.log(typeof myObj);
console.log(typeof myObj.prop1);
console.log(typeof myObj.prop2);
//Type coercion example
console.log(123 + '4');

//equals example
var a = 10;
var b = '10';
//true here (does type insensitive checking)
console.log( a == b);
//false here 
console.log( a === b);

//Nested Objects
var myNestedObj = { 
  'prop1' : 'hello',
  'prop2' : 123,
  //nested object
  'objProp' : {
    'innerProp1' : 'Inner Property'
  }
};

console.log('Inner Object Property using dot: ' + myNestedObj.objProp.innerProp1);

console.log('Inner Object Property using brackets:' + myNestedObj.objProp['innerProp1']);

//Object Equality
var myObj1 = {
  'property1' : 'Value1'
};
var myObj2 = myObj1;
//they point to the same semory location here
if(myObj1 === myObj2){
  console.log('Objects are equal');
}

var myObj3 = {
  'property1' : 'Value1'
};
var myObj4 = {
  'property1' : 'Value1'
};
//they point to the same semory location here
if(myObj3 === myObj4){
  console.log('Objects are equal');
}else{
  console.log('Objects are not equal');
}

//Undefined vs null
var person = {
  'firstName' : 'Anusha',
  'middleName' : null,
  'lastName' : 'Sankaranarayanan'
};
//Age is undefined
console.log(person.middleName);
//Middle name is null 
console.log(person.age);
//Del;ete property
delete person.middleName;
//middleNAme must be gone now
console.log(person);
