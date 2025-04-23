// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]
import { bankAccounts } from "../data/data";

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  let result = [];
  let minPositiveBalance = Number.MAX_VALUE;

  for (let account of array) {
    if (account.balance > 0 && account.balance < minPositiveBalance) {
      result = [account]; // Overwrite result with the client having the least positive balance
      minPositiveBalance = account.balance; // Update minimum positive balance
    }
  }

  if (result.length === 0) {
    return []; // Return an empty array if no clients with positive balance are found
  }

  return result;
}

console.log(getClientWithLeastPositiveBalance(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
