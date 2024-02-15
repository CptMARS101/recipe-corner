import React from "react";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";

function Logout(){
    const [loggedOut, setLoggedOut] = useState()

    useEffect(() => {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok) {
                setLoggedOut(true)
            } else {
                setLoggedOut(false)
            }
        })

    }, [])

    return (
        <p>{loggedOut ? "Logged Out" : 'Error!!'}</p>
    )
}
export default Logout;