import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: 'galymax',
                location: 'Cologne',
                firstName: 'Maxim',
                lastName: 'Werkhowski',
            },
            loggedIn: false,
            changeUser: false
        }

        // Alternative Methdode für's Binding von this
        //this.logIn = this.logIn.bind(this)
    }


    // Arrow function für automatisches Binding von this
    logIn = () => {
        this.setState({
            // nur das, was sich ändert
            loggedIn: !this.state.loggedIn
        })
    }

    editUser = () => {
        this.setState({
            // nur das, was sich ändert
            changeUser: !this.state.changeUser
        })
    }

    //Inspiration: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    handleChange = (userKey, event) => {
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user)
            user[userKey] = event.target.value
            return {user}
        })
    }

    render() {
        return (
            <>
                { this.state.changeUser ? (
                    <div className="change-user">
                        <h2>Nutzer ändern</h2>
                        <form onSubmit={this.editUser.bind(this)}>
                            <input 
                                type="text" 
                                placeholder={this.state.user.username} 
                                value={this.state.user.username}
                                onChange={this.handleChange.bind(this, "username")}
                            />
                            <input 
                                type="text" 
                                placeholder="Ort" 
                                value={this.state.user.location}
                                onChange={this.handleChange.bind(this, "location")}
                            />
                            <input 
                                type="text" 
                                placeholder="Vorname" 
                                value={this.state.user.firstName}
                                onChange={this.handleChange.bind(this, "firstName")}
                            />
                            <input 
                                type="text" 
                                placeholder="Nachname" 
                                value={this.state.user.lastName}
                                onChange={this.handleChange.bind(this, "lastName")}
                            />
                            <button type="submit">Speichern</button>
                        </form>
                    </div> ) :
                    ( <div>
                        <div>Username: {this.state.user.username}</div>
                        <div>Location: {this.state.user.location}</div>
                        <div>Full Name: {this.state.user.firstName} {this.state.user.lastName}</div>
                        <div>Login status: {this.state.loggedIn ? 'logged in' : 'not logged in'}</div>
                        <div>
                            <button onClick={this.logIn}>{this.state.loggedIn ? 'Log out' : 'Log in'}</button>
                            { this.state.loggedIn &&
                                <button onClick={this.editUser}>Bearbeiten</button>
                            }
                        </div>
                    </div> )
                }
            </>
        )
    }
}
