var goodDrivingRecord = true;
var age = 28;

if (goodDrivingRecord === false && age < 25) {
    console.log("User cannot rent, another person must sign for car rental")
} else if (goodDrivingRecord === true && age >= 25) {
    console.log("User gets a discount on the car rental")
} else {
    console.log("User pays full price for the car rental")
}


