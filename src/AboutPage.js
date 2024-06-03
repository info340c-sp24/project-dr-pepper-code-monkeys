import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import './AboutPage.css';

export function About(){
    return ([
        <Head />,
        <Body />,
        <Foot />
    ])
}

function Head(){
    return (
        <Header />
    )
}

function Body(){
    return(
        <main>
          <div className='scroll-bg'/>
      <section className="d-flex flex-row mb-3 pt-4">
        <div id="about-desc-box" className="justify-content-center ms-4 me-4">
          <h1 className="ms-4">About Us</h1>
          <p id="desc" className="fs-5">
            Find Food Seattle was created with the goal of increasing access to government and private
            programs and events providing free or subsidized food, as well as serving as a space to
            connect businesses like restaraunts and stores who are looking to give away extra food to
            those who need it. We aim to do this by creating an interactive easy-to-use map of different
            food banks, and allow users to find assistance in nearby zip codes. Additionally, we plan to
            create a message board that allows for free advertisement of events that center around
            providing free food, as well as direct messaging between those looking to give away food
            regularly and individuals / organizations that request it.
          </p>
        </div>
        <div id="about-img-box" className="me-3">
          <img id="ballard-food-bank-img" src="img/about-store.jpeg" alt="Ballard Food Bank"/>
          <p className="ballard-cap">Image from <a className="ballard-cap" href="https://www.ballardfoodbank.org/">Ballard Food Bank</a></p>
        </div>
      </section>
      <section>
        <div id="goals" className="ms-4">
          <h1>Our Goals</h1>
          <div className="d-flex flex-row">
            <div className="Acard">
              <img src="img/about-giving-food.webp" className="card-img-top"
                  alt="a Seattle Restaraunt employee giving a woman and her child food."/>
              <div className="card-body">
                <p className="card-text">
                  Connecting locals with excess food, such as restaraunt owners,
                  to those who may need that food.
                </p>
              </div>
            </div>
            <div className="Acard">
              <img src="img/about-successful-food-drive.webp" className="card-img-top"
                  alt="A young girl and woman volunteering at a food drive."/>
              <div className="card-body">
                <p className="card-text">
                  Increasing invisibilty of food drive events.
                </p>
              </div>
            </div>
            <div className="Acard">
              <img src="img/about-seattle-road-map.jpeg" className="card-img-top"
                  alt="A map of seattle."/>
              <div className="card-body">
                <p className="card-text">
                  Giving people the chance to find stores near them, no matter what devices they
                  have access to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    )
}

function Foot(){
    return (
        <Footer />
    )
}