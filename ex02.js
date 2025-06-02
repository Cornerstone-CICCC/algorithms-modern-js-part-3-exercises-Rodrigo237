// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  if( numbers.length === 0)
    return 0
  let res = numbers[0]
  for(let i= 1;i< numbers.length;i++){
    res -= numbers[i]
  }
  return res
}

console.log(subtract(10, 2, 3)); // Example usage
console.log(subtract(40, 20, 12)); // Example usage
console.log(subtract(1000, 240, 38)); // Example usage
