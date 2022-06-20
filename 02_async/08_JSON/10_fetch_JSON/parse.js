// In JSON sind Object properties immer in Anführungszeichen

// Im JSON können Objekte und Arrays unbegrenzt verschachtelt werden
const dataString = '{"firstName":"Chris", "hobbies":["VanLife", "grillen"]}';

const obj = JSON.parse(dataString);

console.log(obj);
