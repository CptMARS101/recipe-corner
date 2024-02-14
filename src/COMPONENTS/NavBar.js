import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <NavLink to="/" className="nav-link">HOME</NavLink>
            <NavLink to="/recipes" className="nav-link">COOKBOOK</NavLink>
            <NavLink to="/form" className="nav-link">Add A Recipe</NavLink>
            <NavLink to='/login' className='nav-link'>Log In</NavLink>
            <NavLink to='/logout' className='nav-link'>Log Out</NavLink>
        </nav>
    )
};
export default NavBar;