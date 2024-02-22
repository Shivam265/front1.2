// Es6
// Rest & Spread Operator
// Example Rest

// Rest operator is used combine argument//
/*function addNumbers(a, b, c, ...other) {
  console.log(other);
  return a + b + c;
}

const res = addNumbers(2, 3, 6, 8, 9);
console.log(res);*/

// Spread operator/
// Array ke sath
let names = ["Rohit", "Mohit", "sohan", "Ram", "Shyam"];

function getNames(name1, name2, name3, name4, name5) {
  console.log(name1, name2, name3, name4, name5);
}

//getNames(names[0], names[1], names[2]);
getNames(...names);
//getNames(names)

// object ke sath//

let student = {
  name: "Rohit",
  age: "23",
  hobbies: ["Singing", "Cricket"],
};

//const age = student.age;
//console.log(age);

const { ...other } = student;
console.log(other);

// spread //

let students = {
  ...student,
  age: 24,
};

console.log(students);
