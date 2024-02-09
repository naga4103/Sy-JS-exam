const sampleObject = { name: "Naga", age: 25, year: 1997, state: "AP" };
// Method1--for in
console.log("Sample Object is---", sampleObject);
console.log("Logging each value using--- for in ");
for (let key in sampleObject) {
  console.log(sampleObject[key]);
}

//Method2--Object.values()

const arrayOfValues = Object.values(sampleObject);
console.log("Logging each value using---Object.values() and for of");
for (let value of arrayOfValues) {
  console.log(value);
}


