
"use strict";
// console.log("Hii")


// let empId = "12";

// let tt1 = String(empId)
// console.log(typeof tt1);
// let tt2 = Number(empId)
// console.log(typeof tt2);

// console.log("1"+3);
// console.log(1+"3");
// console.log("1"+"3");


  
  const result = add("op", "mewada"); // Call the add function and store the result in the 'result' variable
  console.log(result); // Output: 8


  function add(a, b) {
   console.log("First");
    return a + " "+ b;
  }

  function add(a, b) {
    console.log("Second");
    return a + " " + b;
  }