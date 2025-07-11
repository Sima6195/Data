
let petName = "Rocky" // Global variable

function myFunction() {
 fruit = 'apple'; // Now properly scoped to the function
    console.log(typeof petName + '-' + 'My pet name is ' + petName);
    
    // To use `fruit` outside, you should return it or declare it globally (not recommended)
   
  return fruit
}
myFunction()

console.log(typeof petName + ' ' + 'My pet name is ' + petName +
    'Fruit name is ' + fruit)
