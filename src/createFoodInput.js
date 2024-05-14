import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';  

//Create '+createList' input in listing. 
export function FoodInput({
    show,
    handleShow,
    handleClose,
    newFood,
    handleChange,
    handleSubmit
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
                <Form.Control
                  type="text"
                  placeholder="Ex: Banana"
                  value={newFood.Food}
                  onChange={handleChange}
                  autoFocus
                />
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
                <Form.Control type="text" placeholder="Neighborhood" value={newFood.Location} onChange={handleChange} />
              </Form.Group>
              <Form.Group className='mb-3' controlId="Zip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" value={newFood.Zip} onChange={handleChange} />
              </Form.Group>
              <Form.Group className='mb-3' controlId="ExpDate">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type='date' value={newFood.ExpDate} onChange={handleChange} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='ImageForm'>
                <Form.Label>Food Image</Form.Label>
                <Form.Control type='file' size='sm' onChange={handleChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
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
            <select className="form-select" id="foodTypeDropdown">
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
            <select className="form-select" id="neighborhoodDropdown">
            <option value="" defaultValue>Choose...</option>
                {Place}
            </select>
        </>
    );
}






  
 

