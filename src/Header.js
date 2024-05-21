import React from 'react';
import { NavBar } from './NavBar';


//Creates header
export function Header(){
    return (
        <header className="d-flex flex-row justify-content-between align-items-center container-fluid bg-light text-black py-3">
        <div className="">
            <img src="/img/logo.svg" alt="FFS logo" className="logo"/>
        </div>
            <NavBar />
        <div>
          <p id="slogan">Linking Plates, Nourishing Lives.</p>
        </div>
      </header>
    )
}