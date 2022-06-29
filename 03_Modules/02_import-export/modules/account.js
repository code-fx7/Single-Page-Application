import { bankDetails } from "./banking.js";

const getRandomInt = (n) => {
  let nInt = "";
  for (let i = 0; i < n; i++) {
    const num = Math.floor(Math.random() * 10);
    nInt += num.toString();
  }
  return nInt;
};

// Einfache Ausgabe
export default () => {
  let iban = "DE";
  iban += getRandomInt(20);

  return iban;
};

// Ausgabe inklusive Berechnung

// const getRandomInt = (n) => {
//     let nInt = ""
//     for (let i = 0; i < n; i++) {
//       const num = Math.floor(Math.random() * 10)
//       nInt += num.toString()
//     }
//     return nInt
//   }

//   export default () => {
//     let iban = "DE"
//     const blz = bankDetails["sparkasse"]["blz"]
//     const checkNumber = getRandomInt(2)
//     const accountnumber = getRandomInt(10)
//     iban = iban + checkNumber + blz + accountnumber

//     return iban
//   }
