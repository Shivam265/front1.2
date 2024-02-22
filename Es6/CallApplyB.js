// Apply ,call & bind in js

//Problem  statement

let userDetails = {
  name: "Rohit kumar",
  age: 25,
  role: "Software Engineer",

  // printDetails: function () {
  //   console.log(this.name);
  // },
};

let printDetails = function (state,country) {
  console.log(this.name+ " " +state+" "+country);
};

printDetails.call(userDetails,"Delhi","India");

let userDetails2 = {
  name: "Mohit kumar",
  age: 25,
  role: "Software Engineer",
};
/* With the call() method, you can write a method that can be used on different objects.*/
// function borrowing call function 
printDetails.call(userDetails2,"Delhi","India");

// apply function array list value
/* With the apply() method, you can write a method that can be used on different objects.*/

printDetails.apply(userDetails2,["Delhi","India"]);


// bind 
/* With the bind() method, an object can borrow a method from another object.*/

let newfun = printDetails.bind(userDetails,"Delhi","India")
console.log(newfun)