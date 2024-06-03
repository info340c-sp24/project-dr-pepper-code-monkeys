import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cards } from './MainPageCard';

//These are information needed to create main page cards.
let cardInfos = [
    {Img:'/img/giving.jpeg',Alt:'people giving food',Title:'Food Listing',Buttontext:'Go',Path:'Listings'},
    {Img:'/img/map.jpeg',Alt:'map of seattle',Title:'Find Food',Buttontext:'Go', Path:'Map'},
    {Img:'/img/mission.jpeg',Alt:'mission',Title:'Our Mission',Buttontext:'Go', Path:'About'}
];

//This page creates the cover page.
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

//Create main page cards, it takes a format listed above in cardInfos
function Body({ cardInfo }) {
    const MainCard = cardInfo.map((card, index) => (
        <Cards key={index} cardData={card} />
    ));
    return (
        <main>
            <div className='scroll-bg'/>
            <div className="content m-3">
                <IntroContent />
                <div className="container">
                    <div className="row row-cols-1 cols-md-3 g-3">
                        {MainCard}
                    </div>
                </div>
            </div>
        </main>
    );
}

// create about
function IntroContent() {
    return (
        <div className="p-3 rounded bg-light border border-black">
            <h2 className="text-center fs-1 fw-bold text-dark">Welcome to Find Food Seattle</h2>
            <h2 className="fs-3 fw-bold text-dark px-3">Why We Exist</h2>
            <div className="px-3">
                <p className="text-dark">
                Many experts consider food insecurity to be a problem of distribution rather than
                supply. This means that while there is enough food produced to feed everyone,
                inefficiencies in how food is distributed lead to significant disparities. In
                and around Seattle, we have witnessed both problems of food insecurity and food
                waste that are inherent in the way households and institutions such as dining halls,
                fraternities and sororities, and catered events manage leftover food. Despite the
                abundance of food, these inefficiencies result in large quantities of edible food
                being discarded, while many individuals and families struggle to find their
                next meal.
                </p>
                <p className="text-dark">
                    <em>With Finding Food Seattle</em>, we plan to bridge this gap by making it
                    easier than ever for people to offer and access food that is not initially
                    designated for food support programs. Our platform is designed to connect
                    those with surplus food directly to those in need. By facilitating this
                    connection, we aim to reduce food waste and improve food security in our
                    community.
                </p>
                <p className="text-dark">
                    Through a community-driven approach, Finding Food Seattle aims
                    to enable individuals, organizations, and businesses to list available
                    surplus food, which can then be accessed by those who need it most. This not
                    only helps to provide immediate relief to those facing hunger but also fosters
                    a culture of sharing and sustainability. Our goal is to create a seamless and
                    efficient food distribution system that ensures no food goes to waste and
                    everyone has enough to eat.
                </p>
            </div>
        </div>
    )
}

//To create footer
function Foot(){
    return (
        <Footer />
    )
}
