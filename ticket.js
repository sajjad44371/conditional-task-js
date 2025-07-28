let childrenAge = 9;
let student = false;
let seniorCitizensAge = 50;
let ticketPrice = 800;
let payAblePrice;
let discount;

if(childrenAge < 10) {
    console.log("Ticket free");
} else if(student) {
    discount = ticketPrice * 50 / 100;
    payAblePrice = ticketPrice - discount;
    console.log("You have to pay:", payAblePrice);
} else if(seniorCitizensAge >= 60) {
    discount = ticketPrice * 15 / 100;
    payAblePrice = ticketPrice - discount;
    console.log("You have to pay:", payAblePrice);
} else {
    console.log("You have to pay:", ticketPrice);
}