//When a function itself is passed as an argument to another function it is called call back
//map and filter uses call back as an argumment
//Map Eg
let arrayOfObj = [
  { id: 1, name: "naga" },
  { id: 2, name: "navee" },
  { id: 3, name: "pulugu" },
];
arrayOfObj.map((eachObj) => {
  console.log(eachObj.id);
});

//Filter Eg--returns an array of matched values

let output = arrayOfObj.filter((eachObj) => {
  return eachObj.id >= 2;
});

console.log(output);
