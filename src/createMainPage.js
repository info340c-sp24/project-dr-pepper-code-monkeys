import React from 'react';
import { Header } from './createHeader';
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
    <Header />
    )
}

//Takes a cardInfo element formatted 
//{id:'1',Img:'/img/giving.jpeg',Alt:'people giving food',Title:'Food Listing',Buttontext:'Go'}
//to create content body
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

//To create footer 
function Foot(){
    return (
        <Footer />
    )
}