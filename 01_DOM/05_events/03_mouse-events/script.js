document.addEventListener("mousemove", checkMousePosition);

function checkMousePosition(event) {
  console.log(event.clientX, event.clientY);
  if (event.clientY < 10) alert("Du willst wohl gehen?");
}
