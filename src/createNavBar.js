import React from 'react';
import { Link } from 'react-router-dom';

//Create the navigation Bar
export function NavBar(){
    return (
        <div id="navbar">
            <Link className="btn btn-outline-dark btn-lg mx-1" to='/MainPage'>Home</Link>
            <Link className="btn btn-outline-dark btn-lg mx-1" to='/About'>About</Link>
            <Link className="btn btn-outline-dark btn-lg mx-1" to='/Listings'>Listings</Link>
            <Link className="btn btn-outline-dark btn-lg mx-1" to='/Map'>Search for Foods</Link>
        </div>
    )
};

