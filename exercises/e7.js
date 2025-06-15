// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]
import { bankAccounts } from "../data/data";

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...

  let result = []; // Store the account with the least positive balance
  let minPositiveBalance = Number.MAX_VALUE;

  for (let account of array) {
    if (account.balance > 0 && account.balance < minPositiveBalance) {
      result = []; // Reset result to store only the new lowest balance account
      result.push(account); // Push the account with the least positive balance
      minPositiveBalance = account.balance; // Update minimum balance tracker
    }
  }

  // Check manually if result has any items instead of using .length
  let hasClient = false;
  for (let _ of result) {
    hasClient = true;
  }

  if (!hasClient) {
    return []; // Return empty array if no eligible account is found
  }

  return result; // Return an array with the account having the least positive balance
}

console.log(getClientWithLeastPositiveBalance(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
