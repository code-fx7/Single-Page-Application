import { Component } from 'react'

class Navigation extends Component {

    // 1. JSX in render-Methode
    // 2. props in this
    render() {
        return (
            <ul>
                {this.props.items.map(item => <li>{item}</li>)}
            </ul>
        )
    }
}


export default Navigation