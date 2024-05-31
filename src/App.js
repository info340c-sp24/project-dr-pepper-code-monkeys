import React, { useState, useEffect, useCallback } from 'react';
import { MainPage } from './MainPage';
import { FoodMap } from './MapPage';
import { Listings } from './ListingPage';
import { About } from './AboutPage';
import { BrowserRouter as Routers, Routes, Route, NavLink } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push as firePush, onValue } from 'firebase/database';

  const firebaseConfig = {
  databaseURL: "https://project340-44f30-default-rtdb.firebaseio.com/",
  };
  const app = initializeApp(firebaseConfig); // Initialize Firebase
  const db = getDatabase(app); // Get a reference to the database service
  const listingsRef = ref(db, "listings");
export default function App(props) {
  //This store current show state of food input form
  const [show, setShow] = useState(false);
  // This store current state of all input foods. Can add initial data via App's prop.
  const [currentFoods, setCurrentFoods] = useState([]);
  
  
  const [Error, setError]= useState({});
  //This store current state of newly added food
  const [newFood, setNewFood] = useState({
    Title:'',
    Food: '',
    Quantity: '',
    Location: '',
    ListingTitle: '',
    Zip: '',
    ExpDate: '',
  });

  const formValidation = ()=>{
    const {Title,Food,Quantity,Location,ListingTitle,Zip,ExpDate} = newFood;
    const newerrors={};
    if(!Title || Title===''){
      newerrors.Title='Please enter Food Title'
    }
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
    if(!ListingTitle || ListingTitle===''){
      newerrors.ListingTitle= 'Please type your description'
    }
    else if(ListingTitle.length>12){
      newerrors.ListingTitle='Please enter no more than 12 characters'
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

  // This control showing of food input form, Showing and closing
  const handleShow = () => setShow(true);
  //This control closing of food input form
  const handleClose = () => {setNewFood('');setShow(false)};

  // This control inputting data into newFood variable from user input
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setNewFood(prevState => ({
      ...prevState,
      [id]: id === 'Image' ?  URL.createObjectURL(files[0]) : value
    }));
    if (!!Error[id]) { 
      setError(prevState => ({
        ...prevState,
        [id]: null
      }));
    }
};


  // This control updating new food into current food list once submit button is clicked. (Food input form)
  const HandleSubmit = (e) => {
    console.log('submitted')
    e.preventDefault();
    const errors= formValidation()
    if(Object.keys(errors).length>0){
      console.log(errors)
      setError(errors)
    }
    else{
      setCurrentFoods([...currentFoods, newFood]);
      setNewFood('');
      addToDb({ newFood });
      handleClose();
    }
  };

  // This ensures that currentFoods and filterValue is updated before executing downstream codes.
  const toFilter = useCallback(() => {
    let filteredFood = currentFoods;
    for (let key in filterValue) {
      if (filterValue[key] !== 'Show All') {
        filteredFood = filteredFood.filter(food => food[key] === filterValue[key]);
      }
    }
    setFilteredFood(filteredFood);
  }, [currentFoods, filterValue]);

  useEffect(() => {
    toFilter();
  },[currentFoods,filterValue,]);

  // This controls updating the current filter based on filter type (Location, Food type, Zip)
  // Note: Zip is set to Show All content if no value entered.
  const HandleFilter = (e, type) => {
    if (e) {
      setFilterValue({ ...filterValue, [type]: e.target.value });
      if (type === 'Zip' && e.target.value === '') {
        setFilterValue({ ...filterValue, [type]: 'Show All' });
      }
    }
    toFilter();
  };

  // Fetch data from Firebase when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      onValue(listingsRef, (dbCopy) => {
        const data = dbCopy.val();

        if (data) {
          const foodList = Object.values(data).map(item => item.newFood);
          setCurrentFoods(foodList);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <>
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
  </>
  );
}

function addToDb(foodToAdd) {
  console.log(listingsRef);
  const newFoodRef = firePush(listingsRef);
  console.log(newFoodRef + listingsRef);
  set(newFoodRef, foodToAdd);
  console.log(newFoodRef + ' hi ' + listingsRef);
}
