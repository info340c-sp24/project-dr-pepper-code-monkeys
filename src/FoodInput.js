import { Modal, Button, Form } from 'react-bootstrap';

export function FoodInput({
  show,
  handleShow,
  handleClose,
  newFood,
  handleChange,
  handleSubmit,
  error
}) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Button className='btn btn-primary btn-lg' variant="primary" onClick={handleShow}>
          + Create Food Listing
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Food</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form noValidate onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={newFood.Title} onChange={(e) => handleChange(e)} placeholder='Max 15 characters' isInvalid={!!error.Title}/>
              <Form.Control.Feedback type='invalid'>{error.Title}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Food">
              <Form.Label>Food Type</Form.Label>
              <Form.Control as='select' onChange={(e) => handleChange(e)} isInvalid={!!error.Food}>
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

            <Form.Group className="mb-3" controlId="ListingTitle">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} value={newFood.ListingTitle} onChange={(e) => handleChange(e)} placeholder='Max 100 characters' isInvalid={!!error.ListingTitle} />
              <Form.Control.Feedback type='invalid'>{error.ListingTitle}</Form.Control.Feedback>
            </Form.Group>


              <Form.Group className='mb-3' controlId="Quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Please enter positive whole number" value={newFood.Quantity} onChange={(e) => handleChange(e)} isInvalid={!!error.Quantity} />
                <Form.Control.Feedback type='invalid'>{error.Quantity}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='mb-3' controlId='Unit'>
                <Form.Label>Unit</Form.Label>
                <Form.Control as='select' onChange={(e)=>handleChange(e)} value={newFood.Unit} placeholder='select' isInvalid={!!error.Unit}>
                  <option value=''>Select...</option>
                  <option value='lb'>lb</option>
                  <option value='kg'>kg</option>
                  <option value='g'>g</option>
                  <option value='oz'>oz</option>
                  <option value='fl oz'>fl oz</option>
                  <option value='L'>L</option>
                  <option value='gal'>gal</option>
                  <option value='pack'>pack</option>
                  <option value='bottle'>bottle</option>
                  <option value='box'>box</option>
                </Form.Control>
                <Form.Control.Feedback type='invalid'>{error.Unit}</Form.Control.Feedback>
              </Form.Group>

            <Form.Group className='mb-3' controlId="Location">
              <Form.Label>Neighborhood</Form.Label>
              <Form.Control as='select' onChange={(e) => handleChange(e)} isInvalid={!!error.Location}>
                <option value=''>Select...</option>
                <option value='Ballard'>Ballard</option>
                <option value='Beacon Hill'>Beacon Hill</option>
                <option value='Belltown'>Belltown</option>
                <option value='Capitol Hill'>Capitol Hill</option>
                <option value='Chinatown-International District'>Chinatown-International District</option>
                <option value='Columbia City'>Columbia City</option>
                <option value='Denny Triangle'>Denny Triangle</option>
                <option value='Fremont'>Fremont</option>
                <option value='Pioneer Square'>Pioneer Square</option>
                <option value='Queen Anne'>Queen Anne</option>
                <option value='South Lake Union'>South Lake Union</option>
                <option value='University District'>University District</option>
                <option value='Wallingford'>Wallingford</option>
                <option value='Westlake'>Westlake</option>
                <option value='Other'>Other</option>
              </Form.Control>
              <Form.Control.Feedback type='invalid'>{error.Location}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3' controlId='Zip'>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type='text' placeholder='Zip Code' onChange={(e)=> handleChange(e)} isInvalid={!!error.Zip}/>
              <Form.Control.Feedback type='invalid'>{error.Zip}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3' controlId="ExpDate">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type='date' value={newFood.ExpDate} onChange={handleChange} isInvalid={!!error.ExpDate} />
                <Form.Control.Feedback type='invalid'>{error.ExpDate}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3' controlId='ContactInfo'>
              <Form.Label>Contact Information</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Name, Phone, Email" value={newFood.ContactInfo} onChange={(e) => handleChange(e)} isInvalid={!!error.ContactInfo} />
              <Form.Control.Feedback type='invalid'>{error.ContactInfo}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type='submit'>
              Post Listing
            </Button>
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

