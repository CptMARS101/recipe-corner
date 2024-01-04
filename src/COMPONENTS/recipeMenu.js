import React from "react";
import RecipeMenuCard from "./recipeMenuCard";

function RecipeMenu({list, setFeatFood}){
    return (
        <>
        <main>
        <span className="menu">
        
            {list && list.map(food => <RecipeMenuCard key={food.id} food={food} setFeatFood={setFeatFood}/>)}  
        </span>
        </main>
        </>
    )
}
export default RecipeMenu;