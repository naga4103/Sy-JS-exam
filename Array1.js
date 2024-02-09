let sampleArray = [1, 11, 43, -2, 65, 2, 3, 1];
let minValue = sampleArray[0];
let maxValue = sampleArray[0];
for (let value of sampleArray) {
  if (value < minValue) {
    minValue = value;
  }

  if (value > maxValue) {
    maxValue = value;
  }
}
console.log("Array is---", sampleArray);
console.log("Minimum Value is,", minValue);
console.log("Maximum value is,", maxValue);
