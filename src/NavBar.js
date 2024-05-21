import React from 'react';
import { Link } from 'react-router-dom';

//Create the navigation Bar
export function NavBar(){
    return (
        <div id="navbar d-flex justify-content-center flex-grow-1">
            <Link className="btn btn-outline-dark btn-lg mx-2" to='/MainPage'>Home</Link>
            <Link className="btn btn-outline-dark btn-lg mx-2" to='/About'>About</Link>
            <Link className="btn btn-outline-dark btn-lg mx-2" to='/Listings'>Listings</Link>
            <Link className="btn btn-outline-dark btn-lg mx-2" to='/Map'>Food and Donation Map</Link>
        </div>
    )
};

