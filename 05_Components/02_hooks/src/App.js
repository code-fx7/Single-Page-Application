import React from 'react'
import './App.css';
//Importieren einen Component, den wir erstellt haben
import Room from './components/Room/Room'

function App() {

  return (
    <div className="App">
      <h1 className="">Lampe</h1>
      {/* Binden unseren Component in unserer App als JSX Tag ein*/} 
      <Room />
    </div>
  )
};

export default App