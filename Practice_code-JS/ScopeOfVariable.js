
// whenver we declare varible as Global then it can not be change inside block using let keyword.
// whenver we declare varible as a inside block or outside block it can be change inside block using var keyword.

let a=100;


function blockScope(){

    let a=12;
    const b =200
    var c = 10;
    console.log(a);
}
console.log(blockScope());

console.log(a);
