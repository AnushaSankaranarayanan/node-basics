
//declaring and definition
var myArray = [100 , 200 , 300];
//accessing elements
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
//shd give undefined
console.log(myArray[4]);
myArray[3] = 400;
console.log(myArray);
//length
console.log(myArray.length);
var myArray2 = myArray;
//below lines print the same no matter if u r accessing 2 or '2'(with quotes')
//Arrays are treated sa java script obnjects with property as index
console.log(myArray2[2]);
console.log(myArray2['2']);

//wrapper objects
var greeting = "hello";
console.log(typeof greeting);
//implicit wrapper object created AND length invoke
console.log(greeting.length);

//Implict methods with Arrays
//Push and Pop
myArray.push(500); //insert
console.log(myArray);
console.log(myArray.pop()); //remove
console.log(myArray);
console.log(myArray.shift());//takes the first element
console.log(myArray);
console.log(myArray.unshift(100));//cancels the above shift and adds the element to the first
console.log(myArray);

//For each iteration
var myFucntion = function(){
   console.log("For each element");
};
myArray.forEach(myFucntion);
//implicit args - item
myFucntion = function(item){
   console.log("For each element : " + item);
};

myArray.forEach(myFucntion);
//implicit args - item , index and array
myFucntion = function(item , index , array){
   console.log("Ite: " + item + "index: " + index + "Array:" + array);
};

myArray.forEach(myFucntion);
//Date
console.log(new Date());