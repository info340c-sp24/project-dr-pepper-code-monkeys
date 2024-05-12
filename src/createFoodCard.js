import React from 'react';

export function FoodCard({FoodData}){
    return (
        <div className='row'>
            <Cards FoodData={FoodData}/>
        </div>
    )
}

function Cards({FoodData}){
    return (
        FoodData.map((Food)=> (
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 py-3">
                <div className="card">
                    <img src={Food.Img} className="card-img-top" alt="Food item image"/>
                    <div className="card-body">
                        <h2 className="card-title">{Food.Title}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">{Food.Location}, {Food.Zip}</h3>
                    </div>
                </div>
            </div>
        ))
    )
}