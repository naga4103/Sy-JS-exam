let arrayA = [1, 2, 6, 7, 3];
let arrayB = [2, 7];
let missedValues = [];
for (let each of arrayA) {
  if (!arrayB.includes(each)) {
    missedValues.push(each);
  }
}
console.log("Missed Values", missedValues);

//Continue and Break
//Both are used in loops. Break is used to exit from loop. Continue is used to continue looping

for (i = 0; i <= 5; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}
console.log("-------------");
for (i = 0; i <= 5; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}
