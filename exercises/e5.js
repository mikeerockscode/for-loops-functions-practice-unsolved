// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']

import { bankAccounts } from "../data/data";
export function getAllClientNames(array) {
  // Your code goes here...

  let clientsNames = [];

  for (let account of array) {
    clientsNames.push(account.name);
  }
  return clientsNames;
}

console.log(getAllClientNames(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
