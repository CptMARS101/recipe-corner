import React from "react";

function RecipeMenuCard({food, setFeatFood}){
    function handleClick() {
        setFeatFood(food)
        console.log(food)

    }
    return (
        <div className="card" onClick={handleClick}>
            <h2>{food.name}</h2>
            <img src={food.image} alt={food.name}/> 
        </div>

    )
}
export default RecipeMenuCard;