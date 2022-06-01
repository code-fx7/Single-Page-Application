const color = prompt("Welche farbe?");

// Get all elements
const section = document.querySelectorAll("section");

section.forEach((sec) => (sec.style.backgroundColor = color));
