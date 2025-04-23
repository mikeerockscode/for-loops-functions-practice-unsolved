// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]
import { bankAccounts } from "../data/data.js";

export function getAllWithdrawals(array) {
  // Your code goes here...
  let result = [];

  for (let account of array) {
    if (account.withdrawals && account.withdrawals.length > 0) {
      let sum = account.withdrawals.reduce(
        (acc, withdrawal) => acc + withdrawal,
        0
      ); // Sum the withdrawals
      result.push(sum);
    } else {
      result.push(0);
    }
  }
  return result;

  // let result = [];

  // for (let account of array) {
  //   if (account.withdrawals && account.withdrawals.length > 0) {
  //     result.push(...account.withdrawals); // Use spread operator to add all withdrawals
  //   }
  // }

  // return result; // Return the array of withdrawals after the loop
}

console.log(getAllWithdrawals(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
