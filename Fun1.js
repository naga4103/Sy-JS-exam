//Function defnition
number(2);
function number(value) {
  console.log(value);
}

//Function Expression
number(3);
let number2 = function (value) {
  console.log(value);
};

//Arrow function

let number3 = (a, b) => a + b;
console.log(number3(1, 2));

//Arrow functions are not hoisted(get error Cannot access 'number3' before initialization). Function defnition and expression are hoisted
