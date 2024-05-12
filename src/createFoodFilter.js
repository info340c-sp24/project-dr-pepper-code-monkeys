import React from 'react';
import { FoodOptions, NeighborhoodOptions } from './createFoodInput';
export function FoodFilter({FoodData}){
    return (
        <div className="mb-4">
            <div className="row">
                <div className="col-md-4">
                    <label for="neighborhoodDropdown" className="form-label">Neighborhood</label>
                        <NeighborhoodOptions FoodData={FoodData}/>
                </div>
                <div className="col-md-4">
                    <label for="zipCodeSearch" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="zipCodeSearch" placeholder="Enter zip code"/>
                </div>
                <div className="col-md-4">
                    <label for="foodTypeDropdown" className="form-label">Food Type</label>
                        <FoodOptions FoodData={FoodData}/>
                </div>
            </div>
        </div>
    )
}