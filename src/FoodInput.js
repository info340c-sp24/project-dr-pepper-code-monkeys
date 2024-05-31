import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

//Create '+createList' input in listing.
export function FoodInput({
    show,
    handleShow,
    handleClose,
    newFood,
    handleChange, 
    HandleSubmit,
    error
  }) {

    return (
      <>
        <div className="d-flex justify-content-center">
          <Button className='btn btn-primary btn-lg' variant="primary" onClick={handleShow}>
            + Create Food List
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          
          <Modal.Header closeButton>
            <Modal.Title>Add Food</Modal.Title>
          </Modal.Header>

          <Modal.Body>
<<<<<<< HEAD
            <Form noValidate onSubmit={HandleSubmit}>
              
=======
            <Form onSubmit={HandleSubmit}>
            <Form.Group className="mb-3" controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={newFood.Title} onChange={handleChange} />
              </Form.Group>

>>>>>>> e88a1e805dc5e25f64be9be7a0d993f98ba3fbfd
              <Form.Group className="mb-3" controlId="Food">
                <Form.Label>Food Type</Form.Label>
                <Form.Control as='select' onChange={handleChange} isInvalid={!!error.Food}>
                  <option value=''>Select...</option>
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
                <Form.Control.Feedback type='invalid'>{error.Food}</Form.Control.Feedback>
              </Form.Group>
<<<<<<< HEAD
              
              <Form.Group className="mb-3" controlId="Title">
                <Form.Label>Listing Title</Form.Label>
                <Form.Control as="textarea" rows={2} value={newFood.Title} onChange={handleChange} isInvalid={!!error.Title}/>
                <Form.Control.Feedback type='invalid'>{error.Title}</Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className='mb-3' controlId="Quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Quantity" value={newFood.Quantity} onChange={handleChange} isInvalid={!!error.Quantity} />
                <Form.Control.Feedback type='invalid'>{error.Quantity}</Form.Control.Feedback>
              </Form.Group>
             
              <Form.Group className='mb-3' controlId="Location">
                <Form.Label>Neighborhood</Form.Label>
                <Form.Control as='select' onChange={handleChange} isInvalid={!!error.Location}>
                  <option value=''>Select...</option>
=======

              <Form.Group className='mb-3' controlId="Quantity">
                <Form.Label>Quantity (Please Include units!)</Form.Label>
                <Form.Control type="text" placeholder="Quantity" value={newFood.Quantity} onChange={handleChange} />
              </Form.Group>

              <Form.Group className='mb-3' controlId="Location">
                <Form.Label>District Located</Form.Label>
                <Form.Control as='select' placeholder="Neighborhood"  onChange={handleChange}>
                  <option value='select'>Select...</option>
>>>>>>> e88a1e805dc5e25f64be9be7a0d993f98ba3fbfd
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
                <Form.Control.Feedback type='invalid'>{error.Location}</Form.Control.Feedback>
              </Form.Group>
<<<<<<< HEAD
              
              <Form.Group className='mb-3' controlId="Zip">
                <Form.Label>Zip</Form.Label>
                <Form.Control required type="text" placeholder="Zip" value={newFood.Zip} onChange={handleChange} isInvalid={!!error.Zip} />
                <Form.Control.Feedback type='invalid'>{error.Zip}</Form.Control.Feedback>
              </Form.Group>
              
=======

              <Form.Group className='mb-3' controlId="Zip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Zip" value={newFood.Zip} onChange={handleChange} />
              </Form.Group>

>>>>>>> e88a1e805dc5e25f64be9be7a0d993f98ba3fbfd
              <Form.Group className='mb-3' controlId="ExpDate">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control required type='date' value={newFood.ExpDate} onChange={handleChange} isInvalid={!!error.ExpDate} />
                <Form.Control.Feedback type='invalid'>{error.ExpDate}</Form.Control.Feedback>
              </Form.Group>
<<<<<<< HEAD
              
              <Form.Group className='mb-3' controlId='Image'>
                <Form.Label>Food Image</Form.Label>
                <Form.Control required type='file' size='sm' onChange={handleChange} isInvalid={!!error.Image} />
                <Form.Control.Feedback type='invalid'>{error.Image}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type='submit'>
                Save Changes
              </Button>
=======

              <Form.Group className='mb-3' controlId="Description">
                <Form.Label>Desctiption</Form.Label>
                <Form.Control as='textarea' rows="4" value={newFood.Description} onChange={handleChange} />
              </Form.Group>

>>>>>>> e88a1e805dc5e25f64be9be7a0d993f98ba3fbfd
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
