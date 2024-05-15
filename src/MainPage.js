import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cards } from './MainPageCard';

//These are information needed to creat main page cards. 
let cardInfos = [
    {Img:'/img/giving.jpeg',Alt:'people giving food',Title:'Food Listing',Buttontext:'Go',Path:'Listings'},
    {Img:'/img/map.jpeg',Alt:'map of seattle',Title:'Find Food',Buttontext:'Go', Path:'Map'},
    {Img:'/img/mission.jpeg',Alt:'mission',Title:'Our Mission',Buttontext:'Go', Path:'About'}
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
    <Header />
    )
}

//Create main page cards it take a format listed above in cardInfos
function Body({cardInfo}){
    const MainCard = cardInfo.map((card, index) => (
                        <Cards key={index} cardData={card} />
                     ))
    return (
    <main>
        <div className="container pb-5">
                <div className="row row-cols-1 cols-md-3 g-3">
                    {MainCard}
                </div>
        </div>
    </main>
    )
}

//To create footer 
function Foot(){
    return (
        <Footer />
    )
}