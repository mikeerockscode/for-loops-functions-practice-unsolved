// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]
import { bankAccounts } from "../data/data";
// export function getClientWithGreatestBalance(array)
// Your code goes here...

//   let result = [];
//   let maxPositiveBalance = Number.MIN_VALUE;

//   for (let account of array) {
//     if (
//       account.balance > maxPositiveBalance &&
//       account.balance === maxPositiveBalance
//     ) {
//       result = [account]; // Overwrite result with the client having the least positive balance
//       maxPositiveBalance = account.balance; // Update minimum positive balance
//     }
//   }
//   return result;
// }

// console.log(getClientWithGreatestBalance(bankAccounts));

export function getClientWithGreatestBalance(array) {
  let result = [];
  let maxPositiveBalance = -Infinity; // Start with the smallest possible value for comparison.

  for (let account of array) {
    if (account.balance > maxPositiveBalance) {
      result = [account]; // Replace result with the current account.
      maxPositiveBalance = account.balance; // Update the maximum positive balance.
    } else if (account.balance === maxPositiveBalance) {
      result.push(account); // Include accounts with the same maximum balance.
    }
  }
  return result;
}

console.log(getClientWithGreatestBalance(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
