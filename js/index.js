

// Iteration 1
let hacker1 = "Driver1";
console.log(hacker1);

let hacker2 = "Naigator1";
console.log(hacker2);


// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
console.log("hacker1 & hacker2 have the same length!")

} else if (hacker1.length > hacker2.length) {
console.log("Hacker1 has more characters");
  
} else if (hacker1.length < hacker2.length) {
  
console.log("Hacker2 has more characters ")
  
} else {
console.log("Invalid");
}


// Iteration 3
//3.1
let newDriverName = "";

for (let i = 0; i < hacker1.length; i++) {
  newDriverName += hacker1[i] + ' ';
 console.log(newDriverName);
}
let finalResult = newDriverName.toUpperCase();
console.log(finalResult);



//3.2 Reverse

let reversedName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
reversedName += hacker1[i];
console.log(reversedName)
}




//3.3
let task1 = "Driver1".localeCompare("Navigator1");

let task2 = "Navigator2".localeCompare("Driver1");

if (task1 === 1) {

console.log("The drivers name goes first");

} else if (task1 === - 1) {
console.log("Yo, the navigator goes first definitely");

} else {
console.log("What?! you both have the same name?");
}


