import React from "react";

function RecipeSearch({setSearch}){
    function handleSearch(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <div className="search-bar">
            <label className = 'search_label' htmlFor="search">Search Recipes:</label>
            <input classname = "search_input"
                type="text"
                name="search-in"
                placeholder="Search Cookbook"
                onChange={handleSearch} />
        </div>
    )
}
export default RecipeSearch;