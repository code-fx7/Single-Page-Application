import './App.css';
import User from './components/User'
import UserFunc from './components/UserFunc'

function App() {
  return (
    <div className="App">
      <h2>Class Component</h2>
      <User />
      <h2>Functional Component</h2>
      <UserFunc />
    </div>
  );
}

export default App;
