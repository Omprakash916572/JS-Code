
// when we seprate the array then its called seprate operator.

// when we pass n number of argument in function this called Rest Operator.


function test(...num){

    for(let key in num){
        console.log(num[key]);
    }
return num;

}

console.log(test(100,2,3,4,5));