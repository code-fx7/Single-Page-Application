import { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import './App.css';

function App(props) {

  const [state, setState] = useState(0)
  const [nasaPic, setNasaPic] = useState({})

  const clickHandler = () => {
    setState(state+1)
    console.log(state)
  };

  /*
    Funktion, die abhängig vom Rendern der Komponente ausgeführt wird. 
    Aufbau ist wie folgt: 
    useEffect(<Funktion die ausgeführt werden soll>, <Abhängigkeiten der Ausführung>)
    Folgende drei Varianten sind möglich:
    Jedes mal wenn Komponente gererenderd wird: useEffect(()=>{...})
    Nur beim initialen rendern: useEffect(()=>{...}, [])
    Nur wenn bestimmte props/state sich ändern: useEffect(()=>{...}, [props1, state2])
  */
  useEffect(()=> {
    fetch("https://api.nasa.gov/planetary/apod?api_key=xnsgaU9eQDbLptemRZwUgpdgdIJD2RQ6tpZr5MF5")
      .then(res => (
        res.json()
      )).then(data => {
        setNasaPic(data)
    })
  }, [])

  console.log("vor dem return")
  return (
    <div className="App">
      <h1>{nasaPic.title}</h1>
      <button onClick={clickHandler}>Klick mich</button>
      <img style={{width:"600px", display: "block"}} src={nasaPic.hdurl}></img>
      <p>{nasaPic.explanation}</p>
    </div>
  )
};

export default App