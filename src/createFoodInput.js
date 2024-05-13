import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

             
//Create '+createList' input in listing. 
export function FoodInput({FoodData}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          +Create Food List
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          
          
          <Modal.Header closeButton>
            <Modal.Title>Add Food</Modal.Title>
          </Modal.Header>


          <Modal.Body>
            <Form>
     
              <Form.Group className="mb-3" controlId="Food">
                <Form.Label>Food</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: Banana"
                  autoFocus
                />
              </Form.Group>
              
              <Form.Group
                className="mb-3"
                controlId="FoodDescription"
              >
                <Form.Label>Food Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group 
                controlId="Quantity"
                className='mb-3'>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Quantity"/>
              </Form.Group>

              <Form.Group 
                controlId="Neighborhood"
                className='mb-3'>
                <Form.Label>Neighborhood</Form.Label>
                <Form.Control type="text" placeholder="Neighborhood"/>
              </Form.Group>

              <Form.Group 
                controlId="Zip"
                className='mb-3'>
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip"/>
              </Form.Group>

              <Form.Group 
                controlId="ExpDate"
                className='mb-3'>
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type='date'/>
              </Form.Group>

              <Form.Group 
                className ='mb-3' 
                controlId='ImageForm'>
                <Form.Label>Food Image</Form.Label>
                <Form.Control type='file' size='sm' />
              </Form.Group>


            </Form>

            
          </Modal.Body>
          
          
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>


        </Modal>
      </>
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








  
 

