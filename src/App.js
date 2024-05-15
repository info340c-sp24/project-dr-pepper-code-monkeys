import React, { useState } from 'react';
import { MainPage } from './createMainPage';
import { FoodMap } from './createMapPage';
import { Listings } from './createListingPage';
import { About } from './createAboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App(props) {
  const [show, setShow] = useState(false);
  const [currentFoods, setCurrentFoods] = useState([]);
  const [newFood, setNewFood] = useState({
    Food: '',
    Quantity: '',
    Location: '',
    Title: '',
    Image: null,
    Zip: '',
    ExpDate: ''
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const handleChange = (e) => {
    const { id, value, files } = e.target;
      setNewFood(prevState => ({
        ...prevState,
        [id]: id === 'Image' ?  URL.createObjectURL(files[0]) : value
      }));
  };

  const handleSubmit = () => {
    setCurrentFoods([...currentFoods, newFood]);
    handleClose();
  };

  return (
      <Routes>
        <Route path='*' element={<MainPage />} />
        <Route path="About" element={<About />} />
        <Route path="Listings" element={
          <Listings 
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            newFood={newFood}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            FoodData={currentFoods}
          />
        } />
        <Route path="Map" element={<FoodMap />} /> 
      </Routes>
  );
}
