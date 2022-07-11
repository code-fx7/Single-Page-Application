import "./App.css";

const navItems = [
  <li>Home</li>,
  <li>About Me</li>,
  <li>Products</li>,
  <li>Contact</li>,
];

function App() {
  return (
    <div className="App">
      <ul>{navItems}</ul>
    </div>
  );
}

export default App;
