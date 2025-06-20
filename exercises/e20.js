// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

// export function separateNamesWithAFromRest(array) {
//   // Your code goes here...

//   let namesWithA = [];
//   let namesWithoutA = [];

//   for (let i = 0; i < array.length; i++) {
//     let hasA = false; // Flag to check if name contains 'a'

//     // Nested loop to check each character in the name
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] === "a" || array[i][j] === "A") {
//         hasA = true;
//         break; // Exit inner loop once 'a' is found
//       }
//     }

//     if (hasA) {
//       namesWithA.push(array[i]); // Push names containing 'a'
//     } else {
//       namesWithoutA.push(array[i]); // Push names without 'a'
//     }
//   }

//   return [namesWithA, namesWithoutA];
// }
// console.log(
//   separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"])
// );

export function separateNamesWithAFromRest(array) {
  let namesWithA = [];
  let namesWithoutA = [];

  for (let i = 0; array[i] !== undefined; i++) {
    let hasA = false; // Flag to check if name contains 'a'

    // Nested loop to check each character in the name manually
    for (let j = 0; array[i][j] !== undefined; j++) {
      if (array[i][j] === "a" || array[i][j] === "A") {
        hasA = true;
        break; // Exit inner loop once 'a' is found
      }
    }

    if (hasA) {
      namesWithA.push(array[i]); // Push names containing 'a'
    } else {
      namesWithoutA.push(array[i]); // Push names without 'a'
    }
  }

  return [namesWithA, namesWithoutA];
}

console.log(
  separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"])
);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
