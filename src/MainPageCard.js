import React from 'react';
import { Link } from 'react-router-dom';

//Creat main page cards 
export function Cards({cardData}){
    return (
        <div className=" col-md-4 d-flex mt-5">
            <div className="card text-center w-100 border-success">
                <div className="col-sm-auto"><img src={cardData.Img} alt={cardData.alt}
                        className="card-img-top img-fit"/>
                </div>
                <div className="card-body ">
                    <div className="row">
                        <div className="col-sm">
                            <h1 className="card-title pb-5">{cardData.Title}</h1>
                            <Link to={`/${cardData.Path}`} className="btn btn-outline-dark btn-lg">{cardData.Buttontext}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}