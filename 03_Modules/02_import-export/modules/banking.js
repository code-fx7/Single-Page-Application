const bankDetails = {
  sparkasse: {
    blz: 51150018,
    location: "Berlin",
  },
};

const atmGreeting = "Wilkommen! Wie viel Geld möchtest du abheben?";

const withdraw = (balance, amount) => {
  if (balance >= amount) {
    //gleiche wie balance = balance - amount
    balance -= amount;
    return balance;
  } else {
    console.log("Bist Arm digga.");
  }
};

const deposit = (balance, amount) => {
  balance += amount;
  return balance;
};
export { withdraw, deposit, bankDetails, atmGreeting };
