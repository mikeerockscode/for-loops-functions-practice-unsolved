// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

// import { bankAccounts } from "../data/data.js";

// export function getAllWithdrawals(array) {
//   // Your code goes here...
//   let result = [];

//   for (let account of array) {
//     if (account.withdrawals && account.withdrawals.length > 0) {
//       let sum = account.withdrawals.reduce(
//         (acc, withdrawal) => acc + withdrawal,
//         0
//       ); // Sum the withdrawals
//       result.push(sum);
//     } else {
//       result.push(0);
//     }
//   }
//   return result;
// }

// console.log(getAllWithdrawals(bankAccounts));

import { bankAccounts } from "../data/data.js";

export function getAllWithdrawals(array) {
  let result = []; // Array to store withdrawal sums

  for (let account of array) {
    let sum = 0;

    if (account.withdrawals) {
      // Ensure withdrawals exist
      for (let withdrawal of account.withdrawals) {
        sum += withdrawal; // Manually sum withdrawals
      }
    }

    result.push(sum); // Push the computed sum into the array
  }

  return result; // Return array of withdrawal sums
}

console.log(getAllWithdrawals(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
