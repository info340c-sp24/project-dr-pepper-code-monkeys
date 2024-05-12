import React, {useEffect} from 'react';
import { Header } from './createHeader';
import { Footer } from './createFooter';
export function Map(){
    return[<Head />,
           <Body />,
           <Foot />
    ]

}

//create header
function Head(){
    return (
        <Header />
    )
}

function Body(){
    const loadMap = () =>{
        const script=document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAZR9PLUAH6mNaa8XYLcyBq1q0INnmpsTs&v=weekly';
        document.body.appendChild(script);
    }
    loadMap();
    return (
        <div id="map">
        </div>
    )
}

//create footer
function Foot(){
    return (
        <Footer />
    )
}