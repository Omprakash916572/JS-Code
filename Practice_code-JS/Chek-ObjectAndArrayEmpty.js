

let arr = [];

if (arr.length == 0) {
  console.log("Array is Empty");
} else {
  console.log("Array is not Empty");
}

let object = {};

if (Object.keys(object).length == 0) {
  console.log("Object is Empty");
} else {
}


// Nullish operator= ??
// its check null or undifned

let test  = null;

let test1  = undefined;
test = test ?? 10;
console.log(test);



test1 = test1 ?? 33;

console.log(test1);

