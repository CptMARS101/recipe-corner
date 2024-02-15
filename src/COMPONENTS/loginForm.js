import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function LoginForm() {
    const [error, setError] = useState()
    const [msg, setMsg] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            'username': e.target.username.value,
            'password': e.target.password.value
        }

        fetch('http://127.0.0.1:5000/login', {

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
                <label>Password: </label>
                <input type="password" name="password" />
                <br />
                <input type="submit" />
            </form>
            <NavLink to='/signup' className='nav-link'>Signup Today!</NavLink>
        </div>
    )

}

export default LoginForm;