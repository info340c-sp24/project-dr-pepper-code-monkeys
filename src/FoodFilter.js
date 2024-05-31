import React from 'react';
export function FoodFilter({HandleFilter}) {
    return (
        <div className="mb-4">
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="neighborhoodDropdown" className="form-label">Neighborhood</label>
                    <select className="form-select" id="neighborhoodDropdown" onChange={event => {HandleFilter(event,'Location')}}>
                        <option>Show All</option>
                        <option>Capitol Hill</option>
                        <option>Ballard</option>
                        <option>Fremont</option>
                        <option>South Lake Union</option>
                        <option>University District</option>
                        <option>Belltown</option>
                        <option>Chinatown-International District</option>
                        <option>Columbia City</option>
                        <option>Pioneer Square</option>
                        <option>Queen Anne</option>
                        <option>Wallingford</option>
                        <option>Westlake</option>
                        <option>Denny Triangle</option>
                        <option>Beacon Hill</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label htmlFor="zipCodeSearch" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="zipCodeSearch" placeholder="Enter zip code" onChange={event => {HandleFilter(event,'Zip')}}/>
                </div>

                <div className="col-md-4">
                    <label htmlFor="foodTypeDropdown" className="form-label">Food Type</label>
                    <select className="form-select" id="listingType" name="listingType" onChange={event => {HandleFilter(event,'Food')}}>
                        <option>Show All</option>
                        <option>Fruits</option>
                        <option>Vegetables</option>
                        <option>Protein</option>
                        <option>Dairy</option>
                        <option>Beverages</option>
                        <option>Grains</option>
                        <option>Oil</option>
                        <option>Snacks</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>
        </div>
    )
}