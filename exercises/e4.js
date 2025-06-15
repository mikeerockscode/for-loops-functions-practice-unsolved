// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  let minArray = [];
  let min = array[0]; // Initialize min with the first element

  for (let num of array) {
    if (num < min) {
      min = num;
    }
    minArray.push(min); // Keep updating the minimum value using .push()
  }

  // Manually determining the last index without using .length
  let lastIndex = 0;
  for (let _ of minArray) {
    lastIndex += 1;
  }

  return minArray[lastIndex - 1]; // Return the final minimum value
}

console.log(findMinValueInArray([2, 45, 32, 3, 0, 46, 12]));

export function findMaxValueInArray(array) {
  // Your code goes here...

  let maxArray = [];
  let max = array[0]; // Initialize max with the first element

  for (let num of array) {
    if (num > max) {
      max = num;
    }
    maxArray.push(max); // Keep updating the maximum value using .push()
  }

  // Manually determining the last index without using .length
  let lastIndex = 0;
  for (let _ of maxArray) {
    lastIndex += 1;
  }

  return maxArray[lastIndex - 1]; // Return the final maximum value
}

console.log(findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]));
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
