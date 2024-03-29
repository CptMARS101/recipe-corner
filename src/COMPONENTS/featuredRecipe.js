import React from "react";
import Ingredient from "./ingredient";
import Recipe from "./recipe";

function FeaturedRecipe({featFood, setFoodList, list, setFeatFood}){
    function handleDelete() {
        const updateFood = list.filter(f => f.id !== featFood.id)
        setFoodList(updateFood)
        setFeatFood()

        fetch(`http://127.0.0.1:5000/recipes/${featFood.id}`, {
            method: 'DELETE'
        })
    }
    return (
        <div className="featured">
            <h2>{featFood.name}</h2>
            <img src={featFood.image} alt={featFood.name}/>
            <br />
            <h4>Ingredients</h4>
            <div className="ingredients-list">
            {featFood.ingredients && featFood.ingredients.map((i, index) => <Ingredient key={index} ingredient={i} />)}
            <br />
            <h4>Recipe</h4>
            {featFood.recipe && featFood.recipe.map((r, index) => <Recipe key={index} recipe={r}/>)}
            <br />
            <button className="delete" onClick={handleDelete}>REMOVE</button>
            </div>   
        </div>
    )
}
export default FeaturedRecipe;