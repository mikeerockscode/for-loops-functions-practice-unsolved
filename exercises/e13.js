// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

// import { bankAccounts } from "../data/data.js";

// export function getAllAccountsWithSumsOfDepositsLess2000(array) {
//   let result = [];

//   for (let account of array) {
//     if (account.deposits && account.deposits.length < 2000) {
//       for (let deposit of account.deposits) {
//         if (deposit < 2000) {
//           result.push(deposit); // Add deposits greater than 100
//         }
//       }
//     }
//   }

//   return result; // Return the array of deposits greater than 100
// }

// import { bankAccounts } from "../data/data.js";

// export function getAllAccountsWithSumsOfDepositsLess2000(array) {
//   let result = [];

//   for (let account of array) {
//     if (account.deposits && account.deposits.length > 0) {
//       // Calculate the sum of all deposits for the account
//       let totalDeposits = account.deposits.reduce(
//         (acc, deposit) => acc + deposit,
//         0
//       );

//       // Add account to the result if the total is less than 2000
//       if (totalDeposits < 2000) {
//         result.push(account); // Push the entire account object (or modify if needed)
//       }
//     }
//   }

//   return result; // Return the array of accounts with total deposits < 2000
// }

// console.log(getAllAccountsWithSumsOfDepositsLess2000(bankAccounts));

import { bankAccounts } from "../data/data.js";

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let result = [];

  for (let account of array) {
    if (!account.deposits || account.deposits.length === 0) {
      // No deposits at all
      result.push(account);
    } else {
      // Calculate the sum of deposits
      let totalDeposits = account.deposits.reduce(
        (acc, deposit) => acc + deposit,
        0
      );
      if (totalDeposits < 2000) {
        result.push(account);
      }
    }
  }

  return result;
}

// Example usage
console.log(getAllAccountsWithSumsOfDepositsLess2000(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
