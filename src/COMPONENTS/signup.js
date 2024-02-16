import React from "react";
import { useState } from "react";

function Signup() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const [msg, setMsg] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            'username': e.target.username.value,
            'password': e.target.password.value
        }
        const pwTwo = {'password2': e.target.password2.value}

        if (data.password === pwTwo.password2) {
            setUsername(data.username)
            setPassword(data.password)
            fetch('http://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) {
                setMsg('Signed Up!')
                return res.json()
            } else {
                setMsg('Something went Wrong!')
                return res.text().then(errorMessage => {
                    throw new Error(errorMessage);
                });
            }
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
        .then(data => {
            setError(data);
            console.log(data);
        })
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
                <input type='text' name='username' />
                <br />
                <input type="password" name="password" placeholder="password"/>
                <br />
                <input type="password" name="password2" placeholder="re enter password"/>
                <br />
                <input type="submit" />
            </form>
        </div>
    )

}

export default Signup;
