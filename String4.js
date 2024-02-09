let sampleString = "Hello world!";
let duplicate = [];
for (i = 0; i < sampleString.length; i++) {
  for (j = 0; j != i && j < sampleString.length; j++) {
    if (sampleString[i] === sampleString[j]) {
      if (!duplicate.includes(sampleString[i])) duplicate.push(sampleString[i]);
    }
  }
}
console.log("Duplicate chars are, ", duplicate);
