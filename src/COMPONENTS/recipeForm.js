import React from "react";
import { useState } from "react";
//import { useOutletContext } from "react-router-dom";

//NEED TO FETCH to /check_session before loading form
function RecipeForm() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [steps, setSteps] = useState("")
    const [foodList, setFoodList] = useState([])
    //const [user] = useOutletContext()

    function handleForm(e) {
        e.preventDefault()
        const newFood = {
            name: e.target.name.value,
            image: e.target.image.value,
            ingredients: e.target.ingredients.value.split('//'),
            steps: e.target.steps.value.split('//')
        }

        fetch('http://127.0.0.1:5000/recipes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data => setFoodList(pV => [...pV, data]))
    }
/*
    if (!user || !user.username) {
        return <p>Log IN to post new recipes!</p>
    } */

    return (
        <div>
            <form className="form" onSubmit={handleForm}>
                <h3>Add Your OWN Recipe!!</h3>
                <p>Separate ingredients & recipe steps with "//" at the end of each line</p>
                <input 
                type="text" 
                name="name" 
                placeholder="Entree Name" 
                className="input-text"
                value={name} onChange={e => setName(e.target.value)}/>
                <br />
                <input 
                type="text" 
                name="image" 
                placeholder="Image url" 
                className="input-text"
                value={image} onChange={e => setImage(e.target.value)}/>
                <br />
                <input 
                type="text" 
                name="ingredients" 
                placeholder="Ingredients" 
                className="input-text"
                value={ingredients} onChange={e => setIngredients(e.target.value)}/>
                <br />
                <input 
                type="text" 
                name="steps" 
                placeholder="Steps" 
                className="input-text"
                value={steps} onChange={e => setSteps(e.target.value)}/>
                <br />
                <input type="submit"
                name="submit"
                value="Add Recipe"
                className="submit"
                />
            </form>
        </div>
    )
}
export default RecipeForm;