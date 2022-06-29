// import { withdraw, deposit } from "./banking.js";
import * as banking from "./banking.js";
import { greetUser } from "./user.js";
import getIban from "./account.js";

// console.log(withdraw(500, 40));
// console.log(deposit(300, 2000));

console.log(greetUser("Chris"));
console.log(getIban());

console.log(banking.deposit(300, 2000));
console.log(banking.bankDetails["sparkasse"]["blz"]);
console.log(banking.atmGreeting);
