// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

// export function flatArrays(array) {
//   // Your code goes here...
//   let results = [];

//   return results;
// }
// const array = [["d", "r"], "z", "b", ["f", "y"]];

// console.log(array.flat());

export function flatArrays(array) {
  let results = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      results.push(...item); // Spread the elements if it's a sub-array
    } else {
      results.push(item); // Push non-array elements directly
    }
  }

  return results;
}

const array = [["d", "r"], "z", "b", ["f", "y"]];
console.log(flatArrays(array)); // Output: ['d', 'r', 'z', 'b', 'f', 'y']

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
