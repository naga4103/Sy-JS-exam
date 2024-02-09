//Deep copy

console.log("Deep copy-----");
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
array2 = array1;
array1[1] = 6;
console.log(array2);

//Shallow copy
console.log("Shallow copy-----");

let array3 = [...array1];
array1[1] = 9;
console.log(array3);
console.log(array1);
