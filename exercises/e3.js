// EXERCISE 3
// Make sure to solve two parts beneath

/**
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

// export function getAverage(array) {
//   // Your code goes here...
//   const total = array.reduce((sum, num) => sum + num, 0);
//   const average = total / array.length;
//   return average;
// }

// console.log(getAverage([22, 45, 4, 65]));

export function getAverage(array) {
  let sumArray = [];
  let sum = 0;
  let count = 0;

  for (let num of array) {
    sum += num;
    sumArray.push(sum); // Using .push() to store cumulative sum
    count += 1; // Manually tracking the number of elements
  }

  // Using only .push()—no other array methods
  let lastIndex = 0;
  for (let _ of sumArray) {
    lastIndex += 1; // Manually determining the last index
  }

  let average = sumArray[lastIndex - 1] / count; // Computing the average

  return average;
}

console.log(getAverage([22, 45, 4, 65])); // Output: 34

/**
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */

export function getStringSum(str) {
  //   // Your code goes here...

  let sumArray = [];
  let sum = 0;
  let count = 0; // Manually tracking the count

  for (let char of str) {
    if (!isNaN(char) && char !== "") {
      sum += Number(char);
      sumArray.push(sum); // Using .push() to store cumulative sum
      count += 1; // Manually incrementing count
    }
  }

  if (count === 0) {
    return 0;
  }

  // Determine last value in sumArray without using .length
  let lastIndex = 0;
  for (let _ of sumArray) {
    lastIndex += 1; // Counting the number of elements manually
  }

  return sumArray[lastIndex - 1]; // Get the last sum without .length
}

console.log(getStringSum("GH2U87A")); // Output: 17
console.log(getStringSum("GHIUJUHSG")); // Output: 0
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
