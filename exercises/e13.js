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

// import { bankAccounts } from "../data/data.js";

// export function getAllAccountsWithSumsOfDepositsLess2000(array) {
//   let result = [];

//   for (let account of array) {
//     if (!account.deposits || account.deposits.length === 0) {
//       // No deposits at all
//       result.push(account);
//     } else {
//       // Calculate the sum of deposits
//       let totalDeposits = account.deposits.reduce(
//         (acc, deposit) => acc + deposit,
//         0
//       );
//       if (totalDeposits < 2000) {
//         result.push(account);
//       }
//     }
//   }

//   return result;
// }

// console.log(getAllAccountsWithSumsOfDepositsLess2000(bankAccounts));

// import { bankAccounts } from "../data/data.js";

// export function getAccountsWithLowDeposits(array) {
//   let result = []; // Array to store qualifying accounts

//   for (let account of array) {
//     let sum = 0;

//     // Check if deposits exist and manually sum them
//     if (account.deposits) {
//       for (let deposit of account.deposits) {
//         sum += deposit;
//       }
//     }

//     // Push the account into result if sum is below 2000 or no deposits exist
//     if (sum < 2000) {
//       result.push(account);
//     }
//   }

//   return result; // Return array of bank accounts meeting criteria
// }

import { bankAccounts } from "../data/data.js";

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let account = array[i];
    let totalDeposits = 0;

    if (account.deposits) {
      for (let j = 0; j < account.deposits.length; j++) {
        totalDeposits += account.deposits[j];
      }
    }

    if (!account.deposits || totalDeposits < 2000) {
      result.push(account);
    }
  }

  return result;
}

console.log(getAllAccountsWithSumsOfDepositsLess2000(bankAccounts));

// console.log(getAccountsWithLowDeposits(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
