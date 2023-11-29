
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);



// console.log(Math.random()*10);

// let arra = ["a" ,"b","c"];

// arra.forEach( function(item){
//     console.log(item.length);
// })

let arry = [1 ,12,13];

// -- for..of loop -its just get element not worry of index.

for(let dd of arry){
    console.log(dd);
}

//-- for..in Loop -- its just give the index value of element.

for(let key in arry){
    console.log(arry[key]);
} 