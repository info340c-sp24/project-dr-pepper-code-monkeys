import React from 'react';
import { MainPage } from './createMainPage';
import { Map } from './createMapPage';
import { Listings } from './createListingPage';
import { About } from './createAboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
    return (
                <Routes>
                    <Route path='*' element={<MainPage/>} />
                    <Route path="About" element={<About />} />
                    <Route path="Listings" element={<Listings />} />
                    <Route path="Map" element={<Map />} /> 
                </Routes>
    );
}