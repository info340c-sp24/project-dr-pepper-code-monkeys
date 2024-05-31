import React, { useState, useEffect } from 'react';
import { MainPage } from './MainPage';
import { FoodMap } from './MapPage';
import { Listings } from './ListingPage';
import { About } from './AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import necessary Firebase functions
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push as firePush, onValue } from 'firebase/database';

/* Firebase Stuff */
const firebaseConfig = {
  databaseURL: "https://project340-44f30-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);
const listingsRef = ref(db, "listings");

export default function App() {
  // This store current show state of food input form
  const [show, setShow] = useState(false);
  // This store current state of all input foods. Can add initial data via App's prop.
  const [currentFoods, setCurrentFoods] = useState([]);

  console.log(currentFoods);
  // This store current state of newly added food
  const [newFood, setNewFood] = useState({
    Food: '',
    Quantity: '',
    Location: '',
    Title: '',
    Image: null,
    Zip: '',
    ExpDate: ''
  });

  // This store state of current filters, Location, Food type, and Zip
  const [filterValue, setFilterValue] = useState({ Location: 'Show All', Food: 'Show All', Zip: 'Show All' });
  // This store state of filtered food which will be shown as food cards.
  const [filteredFood, setFilteredFood] = useState([]);
  // This control showing of food input form
  const handleShow = () => setShow(true);
  // This control closing of food input form
  const handleClose = () => setShow(false);

  // This control inputting data into newFood variable from user input
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setNewFood(prevState => ({
      ...prevState,
      [id]: id === 'Image' ? URL.createObjectURL(files[0]) : value
    }));
  };

  // This control updating new food into current food list once submit button is clicked. (Food input form)
  const HandleSubmit = (e) => {
    console.log({ newFood });
    addToDb({ newFood });
    e.preventDefault();
    setCurrentFoods([...currentFoods, newFood]);
    setNewFood({
      Food: '',
      Quantity: '',
      Location: '',
      Title: '',
      Image: null,
      Zip: '',
      ExpDate: ''
    });
    handleClose();
  };

  // This ensures that currentFoods and filterValue is updated before executing downstream codes.
  useEffect(() => {
    toFilter();
  }, [currentFoods, filterValue]);

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

  // This performs filtering.
  function toFilter() {
    let filteredFood = currentFoods;
    for (let key in filterValue) {
      if (filterValue[key] !== 'Show All') {
        filteredFood = filteredFood.filter(food => food[key] === filterValue[key]);
      }
    }
    setFilteredFood(filteredFood);
  }

  // fetches data from firebase when app runs
  useEffect(() => { // useEfect makes things run after
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

function addToDb(foodToAdd) {
  console.log(listingsRef);
  const newFoodRef = firePush(listingsRef);
  console.log(newFoodRef + listingsRef);
  set(newFoodRef, foodToAdd);
  console.log(newFoodRef + ' hi ' + listingsRef);
}