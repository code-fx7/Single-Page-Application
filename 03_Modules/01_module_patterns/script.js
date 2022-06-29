const bankAccount = (balance, amount) => {
  //gleiche wie balance = balance - amount
  balance -= amount;
  console.log(balance);
};

bankAccount(100, 20);

/* module patterns */

// const bankAccount = ((balance) => {
//   const checkBalance = (currentBalance, amountToWithdraw) => {
//     if (currentBalance >= amountToWithdraw) {
//       return true;
//     } else false;
//   };

//   const withdraw = (amount) => {
//     const currentBalance = checkBalance(balance, amount);
//     if (currentBalance == true) {
//       //gleiche wie balance = balance - amount
//       balance -= amount;
//       return balance;
//     } else {
//       console.log("Bist Arm digga.");
//     }
//   };
//   return {
//     //gleiche wie withdraw: withdraw
//     withdraw,
//   };
// })(300);
