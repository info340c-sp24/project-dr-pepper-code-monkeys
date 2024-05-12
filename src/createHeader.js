import React from 'react';
import { NavBar } from './createNavBar';



export function Header(){
    return (
        <header className="d-flex flex-row justify-content-center container-fluid bg-light text-black py-3">
        <div className="">
            <img src="/img/logo.svg" alt="FFS logo" className="logo"/>
        </div>
        <div className="search-container ms-4">
          <input type="text" className="search-input" placeholder="-"/>
          <button type="button" className="search-button">Search</button>
        </div>
            <NavBar />
        <div>
          <p id="slogan">Linking Plates, Nourishing Lives.</p>
        </div>
      </header>
    )
}