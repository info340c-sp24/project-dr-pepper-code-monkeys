import React from 'react';
import { FoodOptions, NeighborhoodOptions } from './createFoodInput';
export function FoodFilter({FoodData}){
    if(FoodData&&FoodData.length!==0){
            return ( 
                <div className="mb-4">
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="neighborhoodDropdown" className="form-label">Neighborhood</label>
                                <NeighborhoodOptions FoodData={FoodData}/>
                        </div>  
                        <div className="col-md-4">
                            <label htmlFor="zipCodeSearch" className="form-label">Zip Code</label>
                            <input type="text" className="form-control" id="zipCodeSearch" placeholder="Enter zip code"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="foodTypeDropdown" className="form-label">Food Type</label>
                                <FoodOptions FoodData={FoodData}/>
                        </div>
                    </div>
                </div>
            )
    }
}