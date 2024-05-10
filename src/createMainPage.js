import React from 'react';
import { NavBar } from './createNavBar';
import { Footer } from './createFooter';
import { Cards } from './createCard';
const cardInfos = [
    {id:'1',Img:'/img/giving.jpeg',Alt:'people giving food',Title:'Food Listing',Buttontext:'Go'},
    {id:'2',Img:'/img/map.jpeg',Alt:'map of seattle',Title:'Find Food',Buttontext:'Go'},
    {id:'3',Img:'/img/mission.jpeg',Alt:'mission',Title:'Our Mission',Buttontext:'Go'}
];
//This page creats the cover page.
export function MainPage(){
    return[
        <Head key='head' />,
        <Body key='body' cardInfo={cardInfos} />,
        <Foot key='foot' />
    ];
    
}

//Create Header
function Head(){
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



//Takes a cardInfo element formatted 
//{id:'1',Img:'/img/giving.jpeg',Alt:'people giving food',Title:'Food Listing',Buttontext:'Go'}
//to create 
function Body({cardInfo}){
    return (
    <main>
        <div className="container pb-5">
                <div className="row row-cols-1 cols-md-3 g-3">
                    {cardInfo.map((card) => (
                        <Cards key={card.id} cardData={card} />
                    ))}
                </div>
        </div>
    </main>
    )
}

function Foot(){
    return (
        <Footer />
    )
}