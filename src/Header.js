import React from 'react';
import { NavBar } from './NavBar';


//Creates header
export function Header(){
    return (
        <header className="">
        <div className="">
            <img src="/img/logo.svg" alt="FFS logo" className="logo m-3"/>
        </div>
            <NavBar />
        <div>
          <p id="slogan">Linking Plates, Nourishing Lives.</p>
        </div>
      </header>
    )
}