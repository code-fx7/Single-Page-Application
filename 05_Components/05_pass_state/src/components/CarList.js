import React from 'react'

function CarList(props) {
  return (
    <div>
        <ul>
            { props.cars.map(car => <li>{car}</li>) }
        </ul>
    </div>
  )
}

export default CarList