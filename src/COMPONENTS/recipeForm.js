import React from "react";
import { useState } from "react";

function RecipeForm(){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [recipe, setRecipe] = useState("")
    const [foodList, setFoodList] = useState([])
    function handleForm(e) {
        e.preventDefault()

        const newFood = {
            name: e.target.name.value,
            image: e.target.image.value,
            ingredients: e.target.ingredients.value.split('//'),
            recipe: e.target.recipe.value.split('//')
        }
        fetch('http://localhost:3000/recipes', {
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

    return (
        <>
        <div>
            <form className="form" onSubmit={handleForm}>
                <h3>Add Your OWN Recipe!!</h3>
                <p>Create a line break for ingredients & recipe steps with "//" at the end of each line</p>
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
                name="recipe" 
                placeholder="Recipe" 
                className="input-text"
                value={recipe} onChange={e => setRecipe(e.target.value)}/>
                <br />
                <input type="submit"
                name="submit"
                value="Add Recipe"
                className="submit"
                />
            </form>
        </div>
        </>
    )
}
export default RecipeForm;