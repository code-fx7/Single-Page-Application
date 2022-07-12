import "./App.css";

const userProfile = {
  name: "Chris",
  favouriteFoods: [
    { category: "fruits", name: "Plum" },
    { category: "main", name: "Plov" },
    { category: "dessert", name: "Tiramisu" },
  ],
};

// so

// const jsxListElement = userProfile.favouriteFoods.map((foodObj) => {
//   // return JSX into new Array
//   const li = <li>{foodObj.name}</li>;
//   return li;
// });
// function App() {
//   return (
//     <div className="App">
//       <h1>{userProfile.name}</h1>
//       <ul>{jsxListElement}</ul>
//     </div>
//   );
// }

// oder so

function App() {
  const jsxListElement = userProfile.favouriteFoods.map((foodObj, index) => (
    // return JSX into new Array
    <li className="food highlight" key={index}>
      {foodObj.name}
    </li>
  ));
  return (
    <div className="App">
      <h1>{userProfile.name}</h1>
      <ul>{jsxListElement}</ul>
    </div>
  );
}

export default App;
