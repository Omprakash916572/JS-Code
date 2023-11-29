// let obj ={
//     id : 1,
//     "first name" : "op",
//     "address":"Indore"
// }

// console.log(obj);
// console.log(obj.id);
// console.log(obj["first name"]);
// delete obj.id;
// console.log(obj);


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // keys
//     console.log( key );  // name, age, isAdmin
//     // values for the keys
//     console.log( user[key] ); // John, 30, true
//   }


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
  
//   function multiplyNumeric(obj) {
    
//     for(let key in obj){
//       if(typeof obj[key]=='number'){ // validate its number and based on so sum
//       obj[key]*=2;}
//       else{
//         alert(obj[key]);
//       }
     
//     }
// }


// How combine two objects.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// let menu1 = {
//     width1: 1000,
//     height1: 300,
//     title1: "Om"
//   };

  //let obj3 =Object.assign(menu1,menu);
  //let obj3 =Object.assign({},menu1,menu); // optional {}

  //console.log(obj3);
  

  // Check property pf the object.
  
//   let menu1 = {
//     width1: 1000,
//     height1: 300,
//     title1: "Om"
//   };

//   console.log(menu1.hasOwnProperty('title1'));



// Object destructure.

  let user = {
    id: 1000,
    address: "Indore",
    name: "Om"
  }

const {address} = user;

console.log(address);