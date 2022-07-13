import "./App.css";

function greet(type, firstName, lastName) {
  if (type == "formal") {
    return <h1>Sehr geehrter Herr {lastName}</h1>;
  } else {
    return <h1>Hi {firstName}</h1>;
  }
}

// so

// const type = "formal";
// const firstName = "Christoph";
// const lastName = "Feliksiak";

// function App() {
//   return (
//     <div className="App">
//       {type == "formal" ? (
//         <h1>Sehr geehrter Herr {lastName}</h1>
//       ) : (
//         <h1>Hi {firstName}</h1>
//       )}
//     </div>
//   );
// }

// oder so

// const formalGreeting = true;
// const firstName = "Christoph";
// const lastName = "Feliksiak";

// function App() {
//   return (
//     <div className="App">
//       {formalGreeting ? (
//         <h1>Sehr geehrter Herr {lastName}</h1>
//       ) : (
//         <h1>Hi {firstName}</h1>
//       )}
//     </div>
//   );
//}

// oder so

const formalGreeting = false;
const firstName = "Christoph";
const lastName = "Feliksiak";

function generateGreeting(formal, firstName, lastName, gender) {
  let address;
  if (formal) {
    if (gender == "female") {
      address = "Sehr geehrte Frau";
    } else {
      address = "Sehr geehrter Herr";
    }
  } else {
    address = "Hi";
  }

  return (
    <h1>
      {address} {formal ? lastName : firstName}
    </h1>
  );
}
function App() {
  return (
    <div className="App">
      {formalGreeting ? (
        <h1>Sehr geehrter Herr {lastName}</h1>
      ) : (
        <h1>Hi {firstName}</h1>
      )}
      {generateGreeting(true, "Mercedes", "Benz", "female")}
    </div>
  );
}

export default App;
