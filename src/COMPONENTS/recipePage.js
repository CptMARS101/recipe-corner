import React, {useState, useEffect} from "react";
import RecipeMenu from "./recipeMenu";
import RecipeSearch from "./recipeSearch";
import FeaturedRecipe from "./featuredRecipe";

function RecipePage() {
    const [foodList, setFoodList] = useState([])
    const [search, setSearch] = useState("")
    const [featFood, setFeatFood] = useState({})
    useEffect(() => {
        fetch('/recipes')
        .then(res => res.json())
        .then(data => {console.log(data); return setFoodList(data)})
    }, [])
        const searchRecipe = foodList.filter(fd => fd.name.toLowerCase().includes(search.toLowerCase()))
    return(
        <div>
            <RecipeSearch setSearch={setSearch}/>
            <RecipeMenu list={searchRecipe} setFeatFood={setFeatFood}/>
            <FeaturedRecipe featFood={featFood} setFoodList={setFoodList} list={foodList}/>
        </div>
    )
}

export default RecipePage;
