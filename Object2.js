//Deep copy
let obj1 = { name: "Naga", age: 23 };
let obj2 = { name: "Navee" };
obj1 = obj2;
console.log(obj1);
obj2.name = "NAGA";
console.log(obj1);
//Shallow copy
let obj3 = { ...obj2 };
console.log(obj3);
obj2.name = "Raju";
console.log(obj3);
console.log(obj1, obj2);
