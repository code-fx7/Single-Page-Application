import './App.css';
import { useState } from 'react'
import CarList from './components/CarList';

function App() {
  //     data  update function
  const [cars, setCars] = useState(['Audi', 'Porsche', 'VW'])

  function handleTeslaClick() {
    setCars([...cars, 'Tesla'])
  }

  return (
    <div className="App">
     <CarList cars={cars} />
     <button onClick={handleTeslaClick}>Add Tesla</button>
    </div>
  );
}

export default App;
