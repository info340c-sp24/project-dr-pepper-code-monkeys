import React from 'react';

export function FoodCard({FoodData}){
    return (
        <div className='row'>
            <Cards FoodData={FoodData}/>
        </div>
    )
}

//Create card listing each food
function Cards({FoodData}){
    let FoodCard
    if(FoodData&&FoodData.length!==0){
         FoodCard = FoodData.map((Food)=> (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 py-3">
                    <div className="card">
                        <img src={Food.Image} className="card-img-top" alt="Food item image"/>
                        <div className="card-body">
                            <h2 className="card-title text-center">{Food.Title}</h2>
                            <h3 className="card-subtitle mb-1 text-muted">Quantity: {Food.Quantity}</h3>
                            <h3 className="card-subtitle mb-1 text-muted">Expiration Date: {Food.ExpDate}</h3>
                            <h3 className="card-subtitle mb-1 text-muted">Location: {Food.Location}, {Food.Zip}</h3>
                        </div>
                    </div>
                </div>
            ))
    }
    else{
        return (
            <p className='fs-1 text-center'> PePeGa Nothing!</p>
        )
    }
    return (
        <>
            {FoodCard}
        </>
    )
}