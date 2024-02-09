let string1 = "first";
let string2 = "second";
let combinedString = string1.concat(string2);
console.log("Source---", string1);
console.log("Destination---", string2);
console.log("Joined string without changing source---", combinedString);
console.log("Source---", string1);
//Changing Source
string1 = string1.concat(string2);
console.log("Joined string with changing source---", string1);
console.log("Source---", string1);
