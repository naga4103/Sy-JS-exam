let obj1 = { key1: 1, key2: 2, key3: 3 };
console.log("Original object---", obj1);
//Deleting key1
delete obj1.key1;

let arrayOfKeys = Object.keys(obj1);
console.log("Object after deleting key1 property---", obj1);
console.log("Existing keys after deletion---", arrayOfKeys);
if (arrayOfKeys.includes("key1")) {
  console.log("Property exits");
} else {
  console.log("Property doesn't exist");
}
//console.log(arrayOfKeys.includes("key1"));
