import React, { useState } from 'react'

function UserFunc(props) {
    const [ user, setUser ] = useState({
        username: 'herrids',
        location: 'Berlin',
        firstName: 'Ferdi',
        lastName: 'Hoske',
    })
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ changeUser, setChangeUser ] = useState(false)

    const logIn = () => {
        setLoggedIn(!loggedIn)
    }

    const editUser = () => {
        setChangeUser(!changeUser)
    }

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            { changeUser ? (
                <div className="change-user">
                    <h2>Nutzer ändern</h2>
                    <form onSubmit={editUser}>
                        <input 
                            type="text" 
                            placeholder={user.username} 
                            value={user.username}
                            name="username"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Ort" 
                            value={user.location}
                            name="location"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Vorname" 
                            value={user.firstName}
                            name="firstName"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Nachname" 
                            value={user.lastName}
                            name="lastName"
                            onChange={handleChange}
                        />
                        <button type="submit">Speichern</button>
                    </form>
                </div> ) :
                ( <div>
                    <div>Username: {user.username}</div>
                    <div>Location: {user.location}</div>
                    <div>Full Name: {user.firstName} {user.lastName}</div>
                    <div>Login status: {loggedIn ? 'logged in' : 'not logged in'}</div>
                    <div>
                        <button onClick={logIn}>{loggedIn ? 'Log out' : 'Log in'}</button>
                        { loggedIn &&
                            <button onClick={editUser}>Bearbeiten</button>
                        }
                    </div>
                </div> )
            }
        </>
    )
}
export default UserFunc