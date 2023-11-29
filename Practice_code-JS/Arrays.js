
// let arry = [1,2,3,4,5,6,7,8];

// for(let i=0 ; i<arry.length-1 ; i++){
//     console.log(arry[i]);

// }

// -----------------------------

// let arr = [ 'Apple', { name: 'John' }, true, test()];

// function test() 
// {
// return 'hello';
// }

// console.log();



// -----------------------------

let arry = [1,2,3,4,5,6,7,8];
// arry.push(9); // insert element at the end
// arry.shift(); // revome first element from array and shift.
// arry.unshift(11); // add element at the beginning

// for(let i=0 ; i<arry.length ; i++){
//     console.log(arry[i]);
// }

// -- for..of loop -its just get element not worry of index.

// for(let dd of arry){
//     console.log(dd);
// }

// -- for..in Loop -- its just give the index value of element.

// for(let key in arry){
//     console.log(arry[key]);
// } 




// -----------------------------
// Some method operation

console.log("Orignal Array " + arry);
// console.log("slice method " + arry.slice(1,3)); // it will give the element based on range.

// console.log("Orinal Array after Slice " + arry);

// console.log("splice method " +splice(1,3)); // it will give the element based on range. 
//and modfiy existing array (remove elemnts based on provide the range)

console.log("Orinal Array after splice " + arry); // Modified array 1,5,6,7,8

const obj = { 0: "a", 1: "b", 2: "c" };
let vv = Object.keys(obj)
console.log(vv); // ['0', '1', '2']