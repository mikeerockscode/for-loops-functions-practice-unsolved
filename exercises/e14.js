// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

// export function getClientsWithWrongBalance(array) {
//   // Your code goes here...

//   let results = [];

// for(let account of array){
//   if(account.balance === account.deposits - account.withdrawals)
//     return results;
// }

// }
import { bankAccounts } from "../data/data.js";

export function getClientsWithWrongBalance(array) {
  let results = [];

  for (let account of array) {
    if (account.deposits && account.withdrawals) {
      // Calculate expected balance
      let totalDeposits = account.deposits.reduce(
        (acc, deposit) => acc + deposit,
        0
      );
      let totalWithdrawals = account.withdrawals.reduce(
        (acc, withdrawal) => acc + withdrawal,
        0
      );
      let expectedBalance = totalDeposits - totalWithdrawals;

      // Compare with actual balance
      if (account.balance !== expectedBalance) {
        results.push(account); // Add incorrect accounts to results
      }
    }
  }

  return results; // Return accounts with incorrect balances
}

// Example usage
console.log(getClientsWithWrongBalance(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
