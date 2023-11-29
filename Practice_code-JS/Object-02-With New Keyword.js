
function User(name){
    this.name =name;
    this.admin =true;
}
let usr =new User("Omprakash");

console.log(usr);


function User1() {
    alert(new.target);
  }