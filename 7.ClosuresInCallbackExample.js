var a = 10;

var fn = function () {
  console.log(a);//it takes a snapshot of 'a' in the scope whcih will be then used when actual executing.
};
//prints a after 1 sec delay
//fn is a callback function
setTimeout(fn, 1000);
setTimeout(() => {
  console.log(a);
}
  , 1000);

//Done gets printed first though
console.log("Done");