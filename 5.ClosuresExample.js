//Closure is a fucntion that remembers its scope.
var a = 10;
function outer() {
  var b = 20;
  var inner = function () {

    a++;
    b++;
    console.log(a);
    console.log(b);
  };
  return inner;
}
var innerFn = outer();
// it prints 10 and 20 even though it is called outside of the outer fucntion scope. This is because when interpreter runs, it has a reference to the variables the fucntion uses.
//This is closure.
innerFn(); // should be 11 and 21 here

var inner1 = outer();
//b is a new variable now(20) and a is still the same value that was incremented. //12 and 21 here
inner1();