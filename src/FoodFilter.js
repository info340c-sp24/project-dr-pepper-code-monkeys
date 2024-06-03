import React from 'react';

export function FoodFilter({filterValue, handleFilter}) {
    let zipDisplay;
    if (filterValue.Zip === 'Show All') {
        zipDisplay = '';
    } else {
        zipDisplay = filterValue.Zip;
    }

    return (
        <div className="mb-4">
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="neighborhoodDropdown" className="form-label">Neighborhood</label>
                    <select value={filterValue.Location} className="form-select" id="neighborhoodDropdown" onChange={event => {handleFilter(event,'Location')}}>
                        <option>Show All</option>
                        <option>Ballard</option>
                        <option>Beacon Hill</option>
                        <option>Belltown</option>
                        <option>Capitol Hill</option>
                        <option>Chinatown-International District</option>
                        <option>Columbia City</option>
                        <option>Denny Triangle</option>
                        <option>Fremont</option>
                        <option>Pioneer Square</option>
                        <option>Queen Anne</option>
                        <option>South Lake Union</option>
                        <option>University District</option>
                        <option>Wallingford</option>
                        <option>Westlake</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label htmlFor="zipCodeSearch" className="form-label">Zip Code</label>
                    <input value={zipDisplay} type="text" className="form-control" id="zipCodeSearch" onChange={event => {handleFilter(event,'Zip')}}/>
                </div>

                <div className="col-md-4">
                    <label htmlFor="foodTypeDropdown" className="form-label">Food Type</label>
                    <select value={filterValue.Food} className="form-select" id="listingType" name="listingType" onChange={event => {handleFilter(event,'Food')}}>
                        <option value='Show All'>Show All</option>
                        <option value='Fruits'>Fruits</option>
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
    );
}