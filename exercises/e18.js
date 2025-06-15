// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

// export function joinToString(array, separator) {
//   let result = [];
//   return array.join(separator);
// }

// const array = ["a", "b", "c"];
// const seperator ='-'

// console.log(array);

// export function joinToString(array, separator) {
//   let result = ""; // Start with an empty string

//   for (let i = 0; i < array.length; i++) {
//     result += array[i]; // Add each element to the result string

//     // Add separator **only if** it's not the last element
//     if (i < array.length - 1) {
//       result += separator;
//     }
//   }

//   return result;
// }
// const array = ["a", "b", "c"];
// const separator = "-";

// console.log(joinToString(array, separator));

export function joinToString(array, separator) {
  let result = "";
  let i = 0;

  for (; array[i] !== undefined; i++) {
    result += array[i];

    if (array[i + 1] !== undefined) {
      // Check manually if it's not the last element
      result += separator;
    }
  }

  return result;
}

const array = ["a", "b", "c"];
const separator = "-";

console.log(joinToString(array, separator));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
