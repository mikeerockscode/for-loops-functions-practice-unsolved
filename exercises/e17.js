// EXERCISE 17
// Please, read the exercise-info/includes.md to get the initial data of what is the expected result of this exercise.
// doesArrayInclude(['a', 'b', 'c'], 'a') => true
// doesArrayInclude(['a', 'b', 'c'], 'f') => false
// NOTE: You can NOT use the array.includes() method in your code

// export function doesArrayInclude(array, value) {
//   // Your code goes here...
// let results = [];
// for(let value of array){
//   if(array.includes(value))
//     return true;
// } else {
//   return false;
// }
// }

// export function doesArrayInclude(array, value) {
//   return array.includes(value); // Directly check if the array contains the value
// }

// export function doesArrayInclude(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       // Check if the current element matches the value
//       return true;
//     }
//   }
//   return false; // Return false if no match is found
// }
export function doesArrayInclude(array, value) {
  for (let i = 0; array[i] !== undefined; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
