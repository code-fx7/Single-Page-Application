const images = document.querySelectorAll("main img");
const loader = document.querySelector("#loader");
const main = document.querySelector("main");

function loadImage(img) {
  const imageLoadPromise = new Promise((reslove, reject) => {
    img.addEventListener("load", resolve);
  });

  return imageLoadPromise;
}

checkLoading();

async function checkLoading() {
  //    [Promise, Promise...]           Promise
  const imagePromise = Array.from(images).map((img) => loadImage(img));

  await Promise.all([
    startTimeout(), // Promise
    ...imagePromise, // destructuring ...[Promise, Promise]
  ]);

  transitionAfterLoading();
}

function startTimeout() {
  const timeoutPromise = new Promise((resolve, reject) => {});
}
