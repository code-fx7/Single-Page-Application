//importieren useState um State Variable zu definieren und zu ändern
import React, { useState } from 'react'
import './Room.scss'
// importieren weiteren erstellten Component
import Light from '../Light/Light'
// importieren Button aus externer react-bootstrap Bibliothek
import { Button } from 'react-bootstrap'

function Room(props) {
    /* 
    Wir definieren eine State Variable 'isLightOn' und die Funktion
    'setLight' um State Variable zu ändern. Mit useState(false)
    setzen wir den initalen Wert von 'isLightOn' auf false.
    */
    const [isLightOn, setLight] = useState(false)

    // Clickhandler wird vom Button genutzt
    const clickHandler = () => {
        // Wir nutzen setLight Funktion um State Variable umzukehren.
        setLight(!isLightOn)
    }
    
    // Wir definieren zwei Variablen abhängig von State Variable
    const luminosity = isLightOn ? "lit" : "dark"
    const buttonText = isLightOn ? "Turn me down" : "Light me up"

    return (
        <div className="room">
            <div>
                {/* Wir übergeben dem Component Light eine 
                Klasse abhängig von der State Variable */}
                <Light className={luminosity}/>
                <Button
                    onClick={clickHandler} 
                    className="light-button"
                    variant="light"
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}
export default Room