import React from 'react';
import './Light.scss'

function Light(props) {
    /* 
    Wir bekommen einen Klassenname durch die props und fügen
    ihn dem div hinzu, um die Darstellung unserer Lampe zu ändern. 
    */
   
    return (
        <div className={`light ${props.className}`}>
            
        </div>
    )
}

export default Light