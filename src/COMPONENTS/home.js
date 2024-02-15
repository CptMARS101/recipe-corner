import React from "react";

function Home() {
    return(
        <div>
        <h1 id="Title">Recipe Corner</h1>
            <p className="intro">
                Welcome to the <b>RECIPE CORNER!</b> This website is a digital cookbook for you to keep all your recipes in one convenient place!!
                <br />
                Feel free to explore the <a href="http://localhost:3000/recipes">cookbook</a> or sign up to add a new recipe on the <a href="http://localhost:3000/form">FORM</a> page!  
            </p>
        </div>
    )
}
export default Home;