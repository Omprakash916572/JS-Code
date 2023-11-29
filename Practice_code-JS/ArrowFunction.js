

  let wellcome =(question) =>{
    if(confirm(question)) {
      return "You agreed.";
    }
    else {
      return "You canceled the execution.";
    } 
  }

  wellcome("DO you ready");


  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Take input from the console thats why we need add external JSModule.
// let wellcome = (question) => {
//   rl.question(`${question} (yes/no): `, (answer) => {
//     if (answer.toLowerCase() === 'yes') {
//       console.log("You agreed.");
//     } else {
//       console.log("You canceled the execution.");
//     }
//     rl.close();
//   });
// }

// wellcome("Are you ready?");
