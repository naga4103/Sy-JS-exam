function parent(value) {
  return function child() {
    return value;
  };
}

let store = parent(2);
console.log(store());
