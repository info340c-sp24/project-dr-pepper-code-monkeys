import React from 'react';
import { NavBar } from './NavBar';
import './index.css';


//Creates header
export function Header(){
    return (
        <header className="header">
        <div className="logo">
            <img src="/img/logo.svg" alt="FFS logo" className="logo m-3"/>
        </div>
        <NavBar />
        <div >
          <p id="slogan" className='typewriter'>Linking Plates, Nourishing Lives.</p>
        </div>
      </header>
    )
}