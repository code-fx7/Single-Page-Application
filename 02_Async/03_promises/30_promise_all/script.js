const images = [
  "https://images.pexels.com/photos/12576276/pexels-photo-12576276.jpeg?cs=srgb&dl=pexels-phil-desforges-12576276.jpg&fm=jpg",
  "https://images.pexels.com/photos/11789773/pexels-photo-11789773.jpeg?cs=srgb&dl=pexels-yuliia-tretynychenko-11789773.jpg&fm=jpg",
  "https://images.pexels.com/photos/10757791/pexels-photo-10757791.jpeg?cs=srgb&dl=pexels-micaela-alejandro-10757791.jpg&fm=jpg",
  "htts://images.pexels.com/photos/7913028/pexels-photo-7913028.jpeg?cs=srgb&dl=pexels-alejandro-peralta-7913028.jpg&fm=jpg",
  "https://images.pexels.com/photos/12132217/pexels-photo-12132217.jpeg?cs=srgb&dl=pexels-malik-skydsgaard-12132217.jpg&fm=jpg",
];

const loader = document.querySelector("#loader");
const main = document.querySelector("main");

function loadImage(img) {
  const imageElement = document.createElement("img");

  const imageLoadPromise = new Promise((resolve, reject) => {
    imageElement.addEventListener("load", resolve);
    imageElement.addEventListener("error", reject);
  });

  imageElement.src = img;

  main.appendChild(imageElement);

  return imageLoadPromise;
}

checkLoading();

async function checkLoading() {
  //    [Promise, Promise...]                   Promise
  const imagePromises = Array.from(images).map((img) => loadImage(img));

  window.imagePromises = imagePromises;

  await Promise.allSettled([
    // Polyfill for older browsers is loaded from ./allSettled-polyfill.js
    startTimeout(), // Promise
    ...imagePromises, // destructuring ...[Promise, Promise]
  ]);
  transitionAfterLoading();
}

function startTimeout() {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });

  return timeoutPromise;
}

function transitionAfterLoading() {
  loader.style.display = "none";
  main.style.opacity = 1;
}
