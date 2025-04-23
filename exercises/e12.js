// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]
// import { bankAccounts } from "../data/data.js";

// export function getAllDepositsGreaterThanOneHundred(array) {
//   // Your code goes here...

//   let result = [];

//   for (let account of array) {
//     if (account.deposits > 100) {
//       let depo = account.deposits;
//       result.push(depo);
//     }
//   }
//   return result;
// }

// console.log(getAllDepositsGreaterThanOneHundred(bankAccounts));

import { bankAccounts } from "../data/data.js";

export function getAllDepositsGreaterThanOneHundred(array) {
  let result = [];

  for (let account of array) {
    if (account.deposits && account.deposits.length > 0) {
      for (let deposit of account.deposits) {
        if (deposit > 100) {
          result.push(deposit); // Add deposits greater than 100
        }
      }
    }
  }

  return result; // Return the array of deposits greater than 100
}

console.log(getAllDepositsGreaterThanOneHundred(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
