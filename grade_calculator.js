let studentScore = 101;

if(studentScore > 60) {
    if(studentScore >= 60 && studentScore < 70) {
        console.log("Your result is: D");
    } else if(studentScore >= 70 && studentScore < 80) {
        console.log("Your result is: C");
    } else if( studentScore >= 80 && studentScore < 90) {
        console.log("Your result is: B");
    } else if(studentScore >= 90 && studentScore <= 100) {
        console.log("Your result is: A");
    } else {
        console.log("Result error");
    }
} else {
    console.log("You are fail");
}