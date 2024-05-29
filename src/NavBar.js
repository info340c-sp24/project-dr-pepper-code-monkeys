import React from 'react';
import { Link } from 'react-router-dom';

//Create the navigation Bar
export function NavBar(){
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap">
            <Link className="btn btn-outline-dark btn-lg m-2" to='/MainPage'>Home</Link>
            <Link className="btn btn-outline-dark btn-lg m-2" to='/About'>About</Link>
            <Link className="btn btn-outline-dark btn-lg m-2" to='/Listings'>Listings</Link>
            <Link className="btn btn-outline-dark btn-lg m-2" to='/Map'>Food and Donation Map</Link>
        </div>
    )
};

