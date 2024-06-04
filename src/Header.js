import React from 'react';
import { NavBar } from './NavBar';
import './index.css';

export function Header(){
    return (
        <header className="header">
        <div className="logo">
            <img src="/img/logo.svg" alt="FFS logo" className="logo m-3"/>
        </div>
        <NavBar />
        <div >
          <p className='slogan typewriter'>Linking Plates, Nourishing Lives.</p>
        </div>
      </header>
    )
}