import './App.css';
import React from 'react';
import NavBar from './COMPONENTS/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        </header>
        <main>
        <h1 id="Title">Recipe Corner</h1>
            <img width="300" height="175" src="https://media1.tenor.com/m/Tk88pIBn0AoAAAAd/nikocado-avocado-nikocado.gif" />
            <p className="intro">
                Welcome to the <b>RECIPE CORNER!</b> This website is a digital cookbook for you to keep all your recipes in one convenient place!!
                <br />
                Feel free to explore the <a href="http://localhost:3001/recipes">cookbook</a> or add a new recipe on the <a href="http://localhost:3001/form">FORM</a> page!  
            </p>
      </main>
      <Outlet />
    </div>
  );
}

export default App;
