/*const obj = new Object({
  name:"Rohit"
})

const obj = new obj();*/

const obj1 = {
  name: "Rohit",
  age: 23,
  country: "India",
  getName: function () {
    return this.country;
  },

  getRoll: function () {
    return this.roll;
  },
};

//console.log(obj1);

const obj2 = {
  role: "software develoer",
  country: "US",
  roll: 1,
  name: "sohan",
  // prototype used in inherit  parent  object{obj1},class
  __proto__: obj1,
};
//console.log(obj2.getRoll());

const obj3 = {
  class: "MCA",
  __proto__: obj2,
};

//console.log(obj3);

const array1 = ["rohan"];
console.log(array1);

const object = new Object();
console.log(object);

const array = new Array();
console.log(array);

Array.prototype.show = function () {
  return this;
};

const cities = ["Delhi"];
console.log(cities.show());

Array.prototype.convertIntoObject = function () {
  let newObj = {};
  this.forEach((element) => {
    newObj[element] = element;
  });

  return newObj;
};

console.log(cities.convertIntoObject());

function MyPrototype(name, roll) {
  this.name = name;
  this.roll = roll;
}
// inherit{obj1}
MyPrototype.prototype = obj1;

const MyProto = new MyPrototype("Rajan", "38");
console.log(MyProto.getRoll());
