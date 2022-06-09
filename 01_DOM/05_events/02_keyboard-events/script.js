const box = document.querySelector("div");

document.addEventListener("keyup", keyPress);

/*
ArrowUp
ArrowLeft
ArrowRight
ArrowDown
*/

function keyPress(event) {
  const currentTop = parseInt(box.style.top) || 0;
  const currentLeft = parseInt(box.style.left) || 0;

  if (event.key === "ArrowUp") {
    const newTop = currentTop - 10;
    box.style.top = newTop + "px";
  } else if (event.key === "ArrowDown") {
    const newTop = currentTop + 10;
    box.style.top = newTop + "px";
  } else if (event.key === "ArrowLeft") {
    const newLeft = currentLeft + 10;
    box.style.left = newLeft + "px";
  } else if (event.key === "ArrowRight") {
    const newLeft = currentLeft + 10;
    box.style.left = newLeft + "px";
  }
}
