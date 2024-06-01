import React from 'react';
import './index.css';
export function FoodCard({FoodData}){
    return (
        <div className="tableList d-flex justify-content-center align-items-center min-height">
            <div className=" table table-striped table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Type</th>
                    <th scope="col">Location, Zip Code</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Expiration Date</th>
                    <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody className="">
                    <Cards FoodData={FoodData}/>
                </tbody>
            </div>
        </div>
    )
}

//Create card listing each food
function Cards({FoodData}){
    let FoodCard;
    if(FoodData && FoodData.length!==0 ){
        FoodCard = FoodData.map((Food, index)=> (
            <tr key={index}>
                <th scope="row">{Food.Title}</th>
                <td>{Food.Food}</td>
                <td>{`${Food.Location}, ${Food.Zip}`}</td>
                <td>{`${Food.Quantity} ${Food.Unit}`}</td>
                <td>{Food.ExpDate}</td>
                <td>{Food.ListingTitle}</td>
            </tr>
            ))
    }
    else{
        return (
            <tr>
                <th colSpan="6" className="table-warning">Nothing to see here, sorry!</th>
            </tr>
        )
    }
    return (
        <>
            {FoodCard}
        </>
    )
}