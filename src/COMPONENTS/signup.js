import React from "react";
import { useState } from "react";

function Signup() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const [msg, setMsg] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            'username': e.target.username.value,
            'password': e.target.password.value,
            'password2': e.target.password2.value
        }

        if (user.password === user.password2) {
            setUsername(user.username)
            setPassword(user.password)
            fetch('http://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                setMsg('Signed Up!')
            } else {
                setMsg('Something went Wrong!')
                return Promise.reject(res)
            }
        })
        .catch(res => res.json())
        .then(data => setError(data))
        } else {
            setMsg('passwords do not match :(')
        }
        
    }
    const errorElement = error ? <p style={{color: 'red'}}>{error.error}</p> : null

    return (
        <div>
            {msg ? <p>{msg}</p> : null}
            {errorElement}
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type='text' name='username' onChange={e => setUsername(e.target.value)}/>
                <br />
                <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                <br />
                <input type="password" name="password2" placeholder="re enter password"/>
                <br />
                <input type="submit" />
            </form>
        </div>
    )

}

export default Signup;
