// Traversing
const buttons = document.querySelectorAll(".concert-list li button");

buttons.forEach((button) => {
  button.addEventListener("click", selectConcert);
});

function selectConcert(event /* Event Object */) {
  // das ausgewählte Konzert hervorheben
  // target ist das Element wo das Event ausgelöst wurde
  const button = event.target;

  // erster parent, egal auf welcher Ebene
  const concert = button.closest("li");

  // Suchen innerhalb vom li
  const title = concert.querySelector(".title");

  const canceled = concert.querySelector(".canceled");

  // Prüfen auf Kind
  const containsCanceled = concert.contains(canceled);
  if (containsCanceled) return;

  // Auf Übereinstimmung mit Selektor prüfen
  const matchesCanceledSelector = concert.matches(".concert.canceled");
  if (matchesCanceledSelector) return;

  // Alle Kinder
  const children = concert.children;
  for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
    children[i].style.color = "white";
  }
  console.log("click", children);
  concert.style.backgroundColor = "red";
  title.style.backgroundColor = "orange";

  // Vorheriges Element
  const previous = concert.previousElementSibling;
  previous.style.backgroundColor = "blue";
}
