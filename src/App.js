import React, { useState, useEffect, useCallback } from 'react';
import { MainPage } from './MainPage';
import { FoodMap } from './MapPage';
import { Listings } from './ListingPage';
import { About } from './AboutPage';
import { Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push as firePush, onValue } from 'firebase/database';

const firebaseConfig = {
  databaseURL: "https://project340-44f30-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig); 
const db = getDatabase(app); 
const listingsRef = ref(db, "listings");

export default function App(props) {
  const [show, setShow] = useState(false);
  const [currentFoods, setCurrentFoods] = useState([]);
  const [error, setError]= useState({});
  const [newFood, setNewFood] = useState({
    Title:'',
    Food: '',
    Quantity: '',
    Unit:'',
    Location: '',
    ListingTitle: '',
    Zip: '',
    ExpDate: '',
  });

  const formValidation = useCallback(() => {
    const {Title, Food,Quantity, Unit, Location, ListingTitle, Zip, ExpDate } = newFood;
    const newErrors= {};

    if (!Title || Title.trim().length === 0) {
      newErrors.Title = 'Please enter Food Title';
    } else if (Title.length > 15) {
      newErrors.Title = 'Please enter no more than 15 characters';
    }
    if (!Food) {
      newErrors.Food = 'Please select a food type';
    }
    if (!Quantity || isNaN(Quantity) || Quantity.includes(".")) {
      newErrors.Quantity = 'Please enter a valid number';
    } else if (Quantity <= 0) {
      newErrors.Quantity = 'Please enter a number greater than zero';
    }
    if (!Unit) {
      newErrors.Unit = 'Please select a unit';
    }
    if (!Location) {
      newErrors.Location = 'Please select a neighborhood';
    }
    if (!ListingTitle || ListingTitle.trim().length === 0) {
      newErrors.ListingTitle = 'Please type your description';
    } else if (ListingTitle.length > 100) {
      newErrors.ListingTitle = 'Please enter no more than 100 characters';
    }
    if (!isValidZip(Zip)) {
      newErrors.Zip = 'Please enter a valid zip';
    }
    if (!ExpDate || ExpDate === '') {
      newErrors.ExpDate = 'Please enter an expiration date';
    } else {
      if (dayDiff(ExpDate) < 0) {
        newErrors.ExpDate = 'Expiration date must be more than 1 day from today';
      } else if (dayDiff(ExpDate) > 3652) {
        newErrors.ExpDate = 'Please enter a valid expiration date';
      }
    }
    return newErrors;
  }, [newFood]);

  const [filterValue,setFilterValue]=useState({Location:'Show All',Food:'Show All',Zip:'Show All'});
  const [filteredFood, setFilteredFood] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => { 
    setNewFood('');
    setError('');
    setShow(false);
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setNewFood(prevState => ({
      ...prevState,
      [id]: id === 'Image' ?  URL.createObjectURL(files[0]) : value
    }));
    if (!!error[id]) {
      setError(prevState => ({
        ...prevState,
        [id]: null
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = formValidation();
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      setCurrentFoods([...currentFoods, newFood]);
      setNewFood('');
      addToDb({ newFood });
      handleClose();
    }
  };

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
  }, [currentFoods, filterValue, toFilter]);

  const handleFilter = (e, type) => {
    if (e) {
      setFilterValue({ ...filterValue, [type]: e.target.value });
      if (type === 'Zip' && e.target.value === '') {
        setFilterValue({ ...filterValue, [type]: 'Show All' });
      }
    }
    toFilter();
  };

  // Fetch data from Firebase on component mount; removes expired data entry.
  useEffect(() => {
    const fetchData = async () => {
      onValue(listingsRef, (dbCopy) => {
        const data = dbCopy.val();
        if (data) {
          const foodList = Object.values(data).map(item => dayDiff(item.newFood.ExpDate) < 0 ? '' : item.newFood );
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
          handleSubmit={handleSubmit}
          FoodData={filteredFood}
          handleFilter={handleFilter}
          error={error}
          filterValue={filterValue}
        />
      } />
      <Route path="Map" element={<FoodMap />} />
    </Routes>
  );
}

// Add new food data to Firebase
function addToDb(foodToAdd) {
  const newFoodRef = firePush(listingsRef);
  set(newFoodRef, foodToAdd);
}

function dayDiff(date) {
  const today = new Date();
  const expdate = new Date(date);
  const dayDiff = (expdate - today) / (1000 * 60 * 60 * 24);
  return dayDiff;
}

// From stack overflow: Validate US zip codes (##### or #####-#### format)
function isValidZip(zip) {
   return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
}
