var i;
var print = function () {
  console.log(i);
};

for (i = 0; i < 10; i++) {
  setTimeout(print, 1000);//prints 10 because it waits for 1 second before which i gets incremented. This is Async call
}

//To avoid this use the below solution. Make it a fucntion which applies closure 

for (var j = 0; j < 10; j++) {
  (function (currValueOfJ) {
    setTimeout(() => {
      console.log(currValueOfJ);
    } , 1000);
  }
  )(j);
}
