
let form = document.querySelector('form');

let clock = document.getElementById('clock');

setInterval( function(){
   let time = new Date();
   clock.innerHTML = time.toLocaleTimeString();
},1000)


// Add the time submit form some operation like get data and show into html page.
 form.addEventListener('submit', function(e){

    e.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let sum = height+weight;

    if ((height === '' || height < 0 || isNaN(height)) || (weight === '' || weight < 0 || isNaN(weight))) {
        results.innerHTML = "Please Enter Valid Number !!";
    } else {

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    results.innerHTML = ": " + bmi;

        if(bmi<18){
            guide.innerHTML = "Underweight";
        }else if(bmi<18 || bmi > 30){
            guide.innerHTML = "Normal";
        }else{
            guide.innerHTML = "Overweight";
        }
    }

 })

