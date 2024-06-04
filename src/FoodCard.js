import React from 'react';
import './index.css';

export function FoodCard({ FoodData }) {
    return (
        <div className="table-container">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col" className="title-column">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Location, Zip Code</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Expiration Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Contact Information</th>
                    </tr>
                </thead>
                <tbody>
                    <Cards FoodData={FoodData} />
                </tbody>
            </table>
        </div>
    );
}

function Cards({ FoodData }) {
    let foodCards;
    if (FoodData && FoodData.length !== 0 ) {
        foodCards = FoodData.map((food, index) => (
            <tr key={index}>
                <td className="title-column">{food.Title}</td>
                <td>{food.Food}</td>
                <td>{`${food.Location}, ${food.Zip}`}</td>
                <td>{`${food.Quantity} ${food.Unit}`}</td>
                <td>{food.ExpDate}</td>
                <td>{food.ListingTitle}</td>
                <td>{food.ContactInfo}</td>
            </tr>
        ));
    } else {
        return (
            <tr>
                <th colSpan="7" className="table-warning">Nothing to see here, sorry!</th>
            </tr>
        );
    }
    return (
        <>
            {foodCards}
        </>
    );
}