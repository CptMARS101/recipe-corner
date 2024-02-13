import React, {useEffect} from "react";
import Recipe from "./recipe";

function UserPage() {
    useEffect(() => {
        fetch('http://localhost:3000/users/:id')
        .then(res => res.json())
        .then(data => userData)
    })

    return (
        <div>
            <h2>{userData.username}</h2>
            <span>
                {userData.recipes.map(food => <Recipe key={food.id}/>)}
            </span>
        </div>
    )
}

export default UserPage;