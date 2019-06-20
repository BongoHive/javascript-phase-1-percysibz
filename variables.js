// you solution should be here
// exercise number 1
{
const type="exercise numnber 1"
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1993);
}

console.log(calculate_age(new Date(2030, 11, 4)));

console.log(calculate_age(new Date(2030, 1, 1)));	
}


{

//Exercise number2
const type2="exercise numnber 2"
var current_age= 25;
var maximum_age =80;
var estimated_num =3;
var total=(maximum_age-current_age)*estimated_num;

console.log(type2);
console.log('current age is ' + current_age);
console.log('predicted maximum age is ' + maximum_age);
console.log('estimated amount per day ' + estimated_num);
console.log('You will need '+ total + ' to last you until the ripe old age of ' + maximum_age);
}

