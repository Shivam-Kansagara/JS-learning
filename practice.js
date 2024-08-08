function fun1(input) {
  let x = 2;
  return input;
}
console.log(fun1(1));

const fun2 = function (input) {
  let x = 3;
  return input;
};
console.log(fun2(1));

const fun3 = (input) => {
  let x = 2;
  return input;
};
console.log(fun3(1));

const obj = {
  value: 42,
  normalFunction: function () {
    console.log(this.value); // this refers to obj
  },
  arrowFunction: () => {
    console.log(this.Array); // this refers to the outer scope (global object or undefined in strict mode)
  },
};

obj.normalFunction(); // 42
obj.arrowFunction(); // undefined (or error in strict mode) because `this` is not obj in arrowFunction

const object = {
  x: 1,
  fun: function () {
    this.age = 2;
    return this.age;
  },
};
console.log(object); //    2

console.log(object.fun()); //  2
console.log(object); // 2
