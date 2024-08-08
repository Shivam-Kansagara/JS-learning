const arr = [1, 2, 3];
let [x, y] = arr;
let [xx, yy = 222, , zz] = arr; // order matter // name doesnot necessarily matter
x = 4;
let [a, , b] = arr;
console.log(x, y);
console.log(a, b);
console.log(arr);
console.log(xx, yy, zz);
[a, b] = [b, a];
console.log(a, b);

const arr1 = [1, 2, [4, 3]];
const [e, , [c, d]] = arr1;
const [f, , g] = arr1;
console.log(e, f, g, c, d);

const obj = {
  x1: 1,
  x2: 2,
  x3: 3,
  x4: {
    x5: 1,
    x6: 1,
  },
};
const { x1, x3: shi, x2 } = obj; // order does not matter // name should match
const random = obj;
obj.x1 = 1111111111111111;
console.log(obj);
console.log(random);
console.log(x1, x2, shi); // x3 is renamed as shi
const {
  x4: { x4, x5: asda, x6 },
} = obj;

console.log(asda);

const arr2 = [1, 2, 3];
const arr3 = [4, 5, ...arr2];
console.log(arr3);
console.log(...arr3); // spreads the elements of array
// spread operator can only be used for interables like arrays,strings,map,sets but not for
// objects as they are not iterables
// although after es2018 we can use spread operator in object even though they are not iterables

const obj1 = {
  aa: {
    a1: 1,
  },
  bb: 2,
};

const obj2 = { ...obj1 };
obj2.aa.a1 = 2;
obj2.bb = 3;
console.log(obj1);
console.log(obj2);
// it is also shallow level copy will only reference to nested level objects
const dfss = Object.assign({ obj1 }, obj1);
console.log(dfss);

// REST operator
// gethers around elements into one array or object can think of it as opposite of spread operator.
const [a1, ...b1] = [1, 2, 3];
console.log(b1);

// OR operator
console.log(undefined || null || 0 || false || "" || "hello"); // will keep on looking to the right until found a true value.
// here above false values could be false,undefined,null,0,''.
// short circuits when found true value or else returs last value.

// AND operator
console.log("hello" && 2 && null && "ds"); // will keep looking to the right until found a false value.
// here above false value are same as mention 2 lines above.
// short circuits when found false value or else return last value.

// Nullish Coalescing Operator
// same as OR operator but will give false only on null,undefined that's it.
console.log(undefined ?? null ?? 0 ?? "a");
