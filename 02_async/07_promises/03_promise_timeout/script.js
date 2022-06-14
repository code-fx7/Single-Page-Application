function createTimeout(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time * 1000);
  });
}

async function timerStart(time) {
  console.log("⏳");
  // gibt eine Promise zurück
  await createTimeout(time);
  alert("Zeit abgelaufen!");
}

timerStart(5);
