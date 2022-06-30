const jokes = require("jokes");
const rmeme = require("rmeme");

const joke = jokes();

const joke_tag = document.getElementById("joke");

joke_tag.textContent = joke.text;

rmeme
  .meme()
  .then((url) => {
    const meme_img = document.getElementById("meme-img");
    meme_img.src = url;
  })
  .catch((error) => console.log(error));
