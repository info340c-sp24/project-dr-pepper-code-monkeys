import React, { useState, useEffect } from 'react';
import { MainPage } from './MainPage';
import { FoodMap } from './MapPage';
import { Listings } from './ListingPage';
import { About } from './AboutPage';
import { BrowserRouter as Routers, Routes, Route, NavLink } from 'react-router-dom';

export default function App(props) {
  //This store current show state of food input form
  const [show, setShow] = useState(false);
  //This store current state of all input foods. Can add initial data via App's prop.
  const [currentFoods, setCurrentFoods] = useState([]);
  

  const [Error, setError]= useState({});
  //This store current state of newly added food
  const [newFood, setNewFood] = useState({
    Food: '',
    Quantity: '',
    Location: '',
    Title: '',
    Image: null,
    Zip: '',
    ExpDate: '',
  });

  const formValidation = ()=>{
    const {Food,Quantity,Location,Title,Image,Zip,ExpDate} = newFood;
    const newerrors={}
    if(!Food || Food===''){
      newerrors.Food='Please select a food type';
    }
    if(!Quantity || Quantity ==='' || isNaN(Quantity)){
      newerrors.Quantity = 'Help, I need some nubmers, not just any nubmers!'
    }
    else if(Quantity<=0){
      newerrors.Quantity='Please enter number greater than zero'
    }
    if(!Location || Location===''){
      newerrors.Location= 'Please select a neighborhood'
    }
    if(!Title || Title===''){
      newerrors.Title= 'Please type your description'
    }
    else if(Title.length>12){
      newerrors.Title='Please enter no more than 12 characters'
    }
    if(!Image || Image===null){
      newerrors.Image='Plesae upload food image'
    }
    if(!Zip || Zip===''){
      newerrors.Zip='Please enter a zip'
    }
    if(!ExpDate || ExpDate===''){
      newerrors.ExpDate = 'Please enter an expiration date'
    }
    else if(ExpDate){
      const today = new Date();
      const expdate = new Date(ExpDate);
      const dateDiff= (expdate - today)/(1000*60*60*24);
      if(dateDiff<0){
        newerrors.ExpDate='Expiration date must be more than 1 day from today'
      }
      else if(dateDiff>3652){
        newerrors.ExpDate='Plesae enter valid expiration date'
      }
    }



    return newerrors;
  }
 
                                  





  //This store state of current filters, Location, Food type, and Zip
  const [filterValue,setFilterValue]=useState({Location:'Show All',Food:'Show All',Zip:'Show All'});
  //This store state of filtered food which will be shown as food cards.
  const [filteredFood, setFilteredFood] = useState([]);
  //This control showing of food input form
  const handleShow = () => setShow(true);
  //This control closing of food input form
  const handleClose = () => {setNewFood('');setShow(false)};

  //This control inputing data into newFood variable
  //from user input
  const handleChange = (e) => {
    const { id, value, files } = e.target;
      setNewFood(prevState => ({
        ...prevState,
        [id]: id === 'Image' ?  URL.createObjectURL(files[0]) : value
      }));
      if(!!Error[id]){
        setError(prevState=>({
          ...prevState,
          [id]:null
        }))
      }
  };

  //This control updating new food into current food list once
  //submit button in clicked. (Food input formn)
  const HandleSubmit = (e) => {
    e.preventDefault();
    const errors= formValidation()
    if(Object.keys(errors).length>0){
      setError(errors)
    }
    else{
      setCurrentFoods([...currentFoods, newFood]);
      setNewFood('');
      handleClose();
    }
  };

  //This ensure that currentFoods and filterValue is updated before executing down stream codes.
  useEffect(() => {
    toFilter();
  },[currentFoods,filterValue,]);

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
            error={Error}
          />
        } />
        <Route path="Map" element={<FoodMap />} />
      </Routes>
  );
}
