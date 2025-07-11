myfunction();

anotherFunc();

let petName;
function myfunction() {
let petName = "Sizzer"; // local variable
console.log(petName);
}
function anotherFunc() {
let petName = "Jill"; // local variable
console.log(petName);
}

console.log(petName);