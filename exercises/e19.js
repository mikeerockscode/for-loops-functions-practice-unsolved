// EXERCISE 19
// Please, read the exercise-info/reverse.md to get the initial data of what is the expected result of this exercise.
// reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
// NOTE: You can NOT use the array.reverse() method in your code

// export function reverseArray(array) {
//   // Your code goes here...
//   let reversed = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     reversed.push(array[i]); // Push elements from last to first
//   }

//   return reversed;
// }
// const array = [1, 2, 3, 4];

// console.log(reverseArray(array));

export function reverseArray(array) {
  let reversed = [];
  let count = 0;

  // Find the last index manually using a `for` loop
  for (let i = 0; array[i] !== undefined; i++) {
    count = i;
  }

  // Use another `for` loop to iterate backward
  for (let j = count; j >= 0; j--) {
    reversed.push(array[j]);
  }

  return reversed;
}

const array = [1, 2, 3, 4];

console.log(reverseArray(array));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
