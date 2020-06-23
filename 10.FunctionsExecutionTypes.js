"using strict";

function foo() {
  console.log(this);
}
//#Method 1 of calling fucntion
foo(); //this will point to the gloabl object here 

var obj = {};

obj.foo = function () {
  console.log(this);
};

//#Method 2 of calling fucntion
obj.foo(); //this will point to the object (obj) here 

//#Method 3 of calling fucntion (using constructors)

new foo();  //this will point to an empty object since this is called using constructor

//Method 4 of calling fucntion


function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullUserName = function () {
    return this.firstName + " " + this.lastName;
  };
}

var user1 = new User("Tom", "Hans");
var user2 = new User("Mike", " Scott");
console.log(user1.getFullUserName()); //Tom Hans will be printed here
//Method 4 of calling function
// Mike Scott will be printed here- Call() method on user1 is passed with user 2 object - so this reference will point to user2 instead of user1
console.log(user1.getFullUserName.call(user2)); 
//console.log()

function Bicycle(cadence, speed, gear, tirePressure) {
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  this.inflateTires = function () {
    this.tirePressure += 3; //increases the tire pressure by 3
  }
}

var bicycle1 = new Bicycle(50, 20, 4, 25);
var bicycle2 = new Bicycle(60 , 25 , 3 , 30);
bicycle1.inflateTires();
console.log(bicycle1.tirePressure); //shd be 28 now

function Mechanic(name) {
  this.name = name;
}

var mike = new Mechanic("Mike");
//Mechanic can inflate tyres as well 
mike.inflateTires = bicycle1.inflateTires;
mike.inflateTires.call(bicycle1);
console.log(bicycle1.tirePressure); //shd be 31 now

mike.inflateTires.call(bicycle2);
console.log(bicycle2.tirePressure); //shd be 33(30 +3) now
