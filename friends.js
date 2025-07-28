let myScore = 85;
let myFriendScore = 101;

if(myScore > 80) {
    if(myFriendScore > 80 && myFriendScore <= 100) {
        console.log("Go for a lunch.");
    } else if(myFriendScore >= 60 && myFriendScore < 80) {
        console.log("Good luck next time.");
    } else if(myFriendScore >= 40 && myFriendScore < 60) {
        console.log("Keep your friend's message unseen.")
    } else if(myFriendScore < 40) {
        console.log("Block your friend")
    }
    else {
        console.log("Result undefined");
    }
} else {
    console.log("GO to home and sleep and act sad");
}