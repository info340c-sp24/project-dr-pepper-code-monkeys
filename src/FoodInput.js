import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';  

//Create '+createList' input in listing. 
export function FoodInput({
    show,
    handleShow,
    handleClose,
    newFood,
    handleChange,
    HandleSubmit,
  }) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Button className='btn btn-primary btn-lg' variant="primary" onClick={handleShow}>
            +Create Food List
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Food</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="Food">
                <Form.Label>Food</Form.Label>
                <Form.Control as='select' onChange={handleChange}>
                  <option value='select'>Select...</option>
                  <option value='Fruits'>Fruits</option>
                  <option value='Vegetables'>Vegetables</option>
                  <option value='Protein'>Protein</option>
                  <option value='Dairy'>Dairy</option>
                  <option value='Beverages'>Beverages</option>
                  <option value='Grains'>Grains</option>
                  <option value='Oil'>Oil</option>
                  <option value='Snacks'>Snacks</option>
                  <option value='Other'>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Title">
                <Form.Label>Food Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={newFood.Title} onChange={handleChange} />
              </Form.Group>
              <Form.Group className='mb-3' controlId="Quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Quantity" value={newFood.Quantity} onChange={handleChange} />
              </Form.Group>
              <Form.Group className='mb-3' controlId="Location">
                <Form.Label>Neighborhood</Form.Label>
                <Form.Control as='select' placeholder="Neighborhood"  onChange={handleChange}>
                  <option value='select'>Select...</option>
                  <option value='Capitol Hill'>Capitol Hill</option>
                  <option value='Ballard'>Ballard</option>
                  <option value='Fremont'>Fremont</option>
                  <option value='South Lake Union'>South Lake Union</option>
                  <option value='University District'>University District</option>
                  <option value='Belltown'>Belltown</option>
                  <option value='Chinatown-International District'>Chinatown-International District</option>
                  <option value='Columbia City'>Columbia City</option>
                  <option value='Pioneer Square'>Pioneer Square</option>
                  <option value='Queen Anne'>Queen Anne</option>
                  <option value='Wallingford'>Wallingford</option>
                  <option value='Westlake'>Westlake</option>
                  <option value='Denny Triangle'>Denny Triangle</option>
                  <option value='Beacon Hill'>Beacon Hill</option>
                  <option value='Other'>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className='mb-3' controlId="Zip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" value={newFood.Zip} onChange={handleChange} />
              </Form.Group>
              <Form.Group className='mb-3' controlId="ExpDate">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type='date' value={newFood.ExpDate} onChange={handleChange} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='Image'>
                <Form.Label>Food Image</Form.Label>
                <Form.Control type='file' size='sm' onChange={handleChange} />
              </Form.Group> 

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={HandleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


/* Obsolete functions, no longer used. Left here for reference 
export function FoodOptions({FoodData}) {

    const Foods =  FoodData.map((Food, index) => (
                        <option key={index}>{Food.Food}</option>
                    ))
    return (
        <>
            <select className="form-select" id="foodTypeDropdown">
            <option value="" defaultValue>Choose...</option>
                {Foods}
            </select>
        </>
    );
}
export function NeighborhoodOptions({FoodData }) {
    const Place = FoodData.map((neighborhood, index) => (
                    <option key={index}>{neighborhood.Location}</option>
                  ))
    return (
        <>
            <select className="form-select" id="neighborhoodDropdown">
            <option value="" defaultValue>Choose...</option>
                {Place}
            </select>
        </>
    );
}
*/





  
 

