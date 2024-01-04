import React from "react";

function RecipeSearch({setSearch}){
    function handleSearch(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <div className="search-bar">
            <label htmlFor="search">Search Recipes:</label>
            <input
                type="text"
                name="search-in"
                placeholder="Recipe Name"
                onChange={handleSearch} />
        </div>
    )
}
export default RecipeSearch;