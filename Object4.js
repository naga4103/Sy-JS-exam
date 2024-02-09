let b = { value1: 1, value2: 2, value3: 3 };
let c = { value1: 1, value2: 2, value3: 3 };
let a = {};
for (let key in b) {
  // a.key = b.key + c.key;
  a[key] = b[key] + c[key];
}
console.log("Object b---", b);
console.log("Object c---", c);
console.log("Object a---", a);
