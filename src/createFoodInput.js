import React from 'react';


//Create '+createList' input in listing. FoodData require an object with such
//{Location:'place', Food:'food'}
export function FoodInput({FoodData}) {

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className="modal fade" id="createListingModal" tabIndex="-1" role="dialog" aria-labelledby="createListingModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="createListingModalLabel">Create New Listing</h5>
                    </div>
                    <div className="modal-body">
                        <form id="listingForm">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="mb-3">
                                        <label htmlFor="listingName" className="form-label">Listing Name</label>
                                        <input type="text" className="form-control" id="listingName" name="listingName" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="listingQuantity" className="form-label">Quantity</label>
                                        <input type="number" className="form-control" id="listingQuantity" name="listingQuantity" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="listingType" className="form-label">Food Type</label>
                                        <select className="form-select" id="listingType" name="listingType" required>
                                            <FoodOptions FoodData={FoodData}/>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="expirationDate" className="form-label">Expiration Date</label>
                                        <input type="date" className="form-control" id="expirationDate" name="expirationDate" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="neighborhoodDropdown" className="form-label">Neighborhood</label>
                                        <select className="form-select" id="neighborhoodDropdown" name="neighborhood">
                                            <NeighborhoodOptions FoodData={FoodData}/>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="zipCode" className="form-label">Zip Code</label>
                                        <input type="text" className="form-control" id="zipCode" name="zipCode" placeholder="Enter zip code" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3 p-3 bg-light border">
                                        <label htmlFor="photoUpload" className="form-label">Upload Photo</label>
                                        <input type="file" className="form-control" id="photoUpload" name="photoUpload" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save Listing</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

//Create filter options Food, requires an object with 
//{Food:'food}
export function FoodOptions({FoodData}) {

    const Foods =  FoodData.map((Food, index) => (
                        <option key={index}>{Food.Food}</option>
                    ))
    return (
        <>
            <select class="form-select" id="foodTypeDropdown">
            <option value="" defaultValue>Choose...</option>
                {Foods}
            </select>
        </>
    );
}

//Creates filter options Neighborhood, requires an object with 
//{Location:'place'}
export function NeighborhoodOptions({FoodData }) {
    const Place = FoodData.map((neighborhood, index) => (
                    <option key={index}>{neighborhood.Location}</option>
                  ))
    return (
        <>
            <select class="form-select" id="neighborhoodDropdown">
            <option value="" defaultValue>Choose...</option>
                {Place}
            </select>
        </>
    );
}