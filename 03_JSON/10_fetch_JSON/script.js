//  Fetch von API

const apiCharaktersURL = "https://rickandmortyapi.com/api/character";

fetch(apiCharaktersURL)
  .then((response) => response.json()) // json Methode von fetch response macht JSON.parse()
  .then((obj) => renderCharacters(obj));

function renderCharacters(data) {
  data.results.forEach((character) => {
    const img = document.createElement("img");
    img.src = character.image;

    document.body.appendChild(img);
  });
}
