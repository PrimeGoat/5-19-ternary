//1.
const person = [{ name: "Jill" }, { name: "" }, { name: "Bob" }];
//create a function 'greeting' that maps through the array.
// Use a ternary.
// If there is a name it should say 'Hello <name>' otherwise it should say,
// 'Hello Stranger'.
console.log("#1");

const greeting = function() {
    for(entry of person) {
        console.log("Hello " + ((entry.name == "") ? "Stranger" : entry.name));
    }
}
greeting();


//2.
///Create a function that uses ternary to decide whether the person can drive
// If they are below 15 then log 'cannot drive', if they are 15 then log 'can drive with a parent', if they are 16 or above then 'yes they can drive'
console.log("#2");

const canDrive = function(age) {
    console.log((age > 90) ? "You should be driving them!" : (age >= 16) ? "Yes they can drive" : (age == 15) ? "Can drive with a parent" : "Cannot drive");
}

canDrive(14);
canDrive(15);
canDrive(16);
canDrive(100);


//3.
// create a variable speedMessage that has a value resulting from a ternary
// if the speed equals 70 it should say '70 is the perfect speed'
// if the speed is greater than or equal to 90 it should say 'Are you trying to get us killed'
// if the speed is less than 50 it should have the value 'Faster please'
// if speed is less than 10 it should say you should not drive
// there should be a default value that says (if speed is 75 for example), '75 is a decent enough speed'
// ---
console.log("#3");

let c = 670616629;
let speed = 75;
let speedMessage = evaluateSpeed(speed);

function evaluateSpeed(speed) {
    return (speed > c) ? "You are trying to break the universal speed limit!" : (speed == c) ? "You must be a photon" : (speed >= 90) ? "Are you trying to get us killed" : (speed == 70) ? "70 is the perfect speed" : (speed < 10) ? "You should not drive" : (speed < 50) ? "Faster please" : `${speed} is a decent enough speed`;
}

for(entry of [670616700, 670616629, 95, 75, 70, 40, 5]) {
    console.log(evaluateSpeed(entry));
}


//4. 
// map through an array and if the value is greater than 50 it goes in the arr1
//if the array is less than 50 it goes in arr2
// if the value is a string arr3
//floating point numbers should only have 2 decimal places with the exact numbers not rounded
//use ternary
// use an array method BUT do not return a data structure when you iterate through your items.
// OUTPUT:
//[ 445, 4555 ][ 22, 33.99, 1, 44.98 ] [ 'peaches', 'apple' ]
console.log("#4");

let arr = [
    'peaches',
    444.7,
    22,
    undefined,
    33.99999,
    null,
    1,
    'apple',
    4555,
    undefined,
    NaN,
    44.98999,
]

let arr1 = []
let arr2 = []
let arr3 = []

// This was annoying as hell to make.  Ternary is not always the best way to go.
for(element of arr) {
    (typeof element == "string") ?
        arr3.push(element) :
    (typeof element == "number" && !isNaN(element) && element < 50) ?
        arr2.push((element.toString().includes('.')) ?
            Number(element.toString().slice(0, (element.toString().indexOf(".")) + 3)) :
            element) :
    (typeof element == "number" && !isNaN(element)) ?
        arr1.push((element.toString().includes('.')) ?
            Number(element.toFixed(2)) :
            element) :
        null;
}

console.log(arr1, arr2, arr3);
