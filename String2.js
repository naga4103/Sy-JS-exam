const sampleString = "abcdefgh";
let convertedString = "";
for (i = 0; i < sampleString.length; i++) {
  if (i % 2 === 0) {
    convertedString += sampleString[i].toUpperCase();
  } else {
    convertedString += sampleString[i];
  }
}
console.log("Sample String is---", sampleString);
console.log("Converted String is---", convertedString);
