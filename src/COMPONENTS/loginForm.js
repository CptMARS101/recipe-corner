import React from "react";
import { useState } from "react";

function LoginForm() {
    const [error, setError] = useState()
    const [msg, setMsg] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            'username': event.target.username.value,
            'password': event.target.password.value
        }
        fetch('http://127.0.0.1:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) {
                setMsg('Logged In')
            } else {
                setMsg('Log In failed')
                return Promise.reject(res)
            }
        })
        .catch(res => res.json())
        .then(data => setError(data))
    }
    const errorElement = error ? <p style={{color: 'red'}}>{error.error}</p> : null

    return (
        <div>
            {msg ? <p>{msg}</p> : null}
            {errorElement}
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type='text' name='username' />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" />
            </form>
        </div>
    )

}

export default LoginForm;