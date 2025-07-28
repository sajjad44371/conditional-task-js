let weightKg = 69;
let heightMeter = 1.7;
let bmi = weightKg / (heightMeter) ** 2;

console.log(bmi.toFixed(2));

if(bmi < 18.5) {
    console.log("You are under weight.");
} else if(bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are normal.");
} else if(bmi >= 25 && bmi <= 29.9) {
    console.log("You are over weight.");
} else {
    console.log("You are obese.");
}