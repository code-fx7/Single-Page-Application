// // Ein Item anlegen
// localStorage.setItem("Sprachauswahl", "Deutsch");

// // Ein Item abfragen
// const language = localStorage.getItem("Sprachauswahl");
// console.log(language);
// alert(language);

// // Ein Item löschen
// localStorage.removeItem("Sprachauswahl");

// Begrüßung
const greeting = () => {
  const user = localStorage.getItem("Benutzer");
  if (user != null) {
    document.querySelector(
      "#greeting"
    ).innerHTML = `Hallo ${user}. Willkommen zurück!"`;
  }
};

const saveName = () => {
  const name = document.querySelector("#name").value;
  localStorage.setItem("Benutzer", name);
  greeting();
};

greeting();

// Löscht den Nutzer und die localStorage
const removeUser = () => {
  localStorage.removeItem("Benutzer");
  document.querySelector("#greeting").innerHTML = "Tschüss !";
};
