// const employee = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     jobTitle: "Software Engineer",
//     salary: 60000,
//   };


//   for( let data in employee){
//     console.log( data + " " +employee[data]);

//   }

// Create a list of employees using an array of objects
const employees = [
    {
      firstName: "John",
      lastName: "Doe",
      jobTitle: "Software Engineer",
      salary: 60000,
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      jobTitle: "Product Manager",
      salary: 75000,
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      jobTitle: "UX Designer",
      salary: 55000,
    },
  ];
  

  for(let i =0 ; i<employees.length; i++){
    let employee = employees[i];
    for(let data in employee){
        console.log(data + " " +employee[data])
        console.log(".....................")
    }
  }

  // Memory

  // Stack (Primitive) and Heap (Non Primitive)
 

// Object.keys, values, entries
// following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.