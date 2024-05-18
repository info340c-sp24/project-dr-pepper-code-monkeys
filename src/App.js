import React, { useState, useEffect } from 'react';
import { MainPage } from './MainPage';
import { FoodMap } from './MapPage';
import { Listings } from './ListingPage';
import { About } from './AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App(props) {
  //This store current show state of food input form 
  const [show, setShow] = useState(false);
  //This store current state of all input foods. Can add initial data via App's prop. 
  const [currentFoods, setCurrentFoods] = useState([]);
  //This store current state of newly added food
  const [newFood, setNewFood] = useState({
    Food: '',
    Quantity: '',
    Location: '',
    Title: '',
    Image: null,
    Zip: '',
    ExpDate: ''
  });
  //This store state of current filters, Location, Food type, and Zip
  const [filterValue,setFilterValue]=useState({Location:'Show All',Food:'Show All',Zip:'Show All'});
  //This store state of filtered food which will be shown as food cards. 
  const [filteredFood, setFilteredFood] = useState([]);
  //This control showing of food input form
  const handleShow = () => setShow(true);
  //This control closing of food input form 
  const handleClose = () => setShow(false);
  
  //This control inputing data into newFood variable 
  //from user input 
  const handleChange = (e) => {
    const { id, value, files } = e.target;
      setNewFood(prevState => ({
        ...prevState,
        [id]: id === 'Image' ?  URL.createObjectURL(files[0]) : value
      }));
  };

  //This control updating new food into current food list once
  //submit button in clicked. (Food input formn)
  const HandleSubmit = (e) => {
    setCurrentFoods([...currentFoods, newFood])
    handleClose();
  };
  
  //This ensure that currentFoods and filterValue is updated before executing down stream codes. 
  useEffect(() => {
    toFilter();
  },[currentFoods,filterValue]);

  //This control updating the current filter based on filter type (Location, Food type, Zip)
  //Note: Zip is set to Show All content if no value entered. 
  const HandleFilter = (e,type) => {
    if(e){
      setFilterValue({...filterValue,[type]:e.target.value})
      if(type==='Zip'&&e.target.value===''){
        setFilterValue({...filterValue,[type]:'Show All'})
      }
    }
    toFilter();
  };

  //This perform filter. 
  function toFilter(){
    let filteredFood=currentFoods;
    for(let key in filterValue){
      if(filterValue[key]!=='Show All'){
        filteredFood = filteredFood.filter(food => food[key]===filterValue[key])
      }
    }
      setFilteredFood(filteredFood);
  }
  

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
            HandleSubmit={HandleSubmit}
            FoodData={filteredFood}
            HandleFilter={HandleFilter}
          />
        } />
        <Route path="Map" element={<FoodMap />} /> 
      </Routes>
  );
}
