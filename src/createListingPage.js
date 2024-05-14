import React, { useState } from 'react';
import { Header } from './createHeader';
import { Footer } from './createFooter';
import { FoodInput} from './createFoodInput';
import { FoodFilter } from './createFoodFilter';
import { FoodCard } from './createFoodCard';


//These are information needed to creates each card and filter function, these should be able to be modified somewhere. 
//Creates listing page
export function Listings(){
    return [
        <Head />,
        <Body />,
        <Foot />
    ]
}

function Head(){
    return(
        <Header />
    )
}


//Creates body
function Body(){
    return (
        <main className="container">
            <UpdateDataThenRender />
        </main>
    )
}

function UpdateDataThenRender(){
  const [show, setShow] = useState(false);
  const [currentFoods, setCurrentFoods] = useState([]);
  const [newFood, setNewFood] = useState({
    Food: '',
    Quantity: '',
    Location: '',
    Title: '',
    Img: null,
    Zip: '',
    ExpDate: ''
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setNewFood(prevState => ({
      ...prevState,
      [id]: id === 'ImageForm' ? files[0] : value
    }));

  };

  const handleSubmit = () => {
    setCurrentFoods([...currentFoods, newFood]);
    handleClose();
  };

  return (
    <>
      <FoodInput
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        newFood={newFood}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <FoodFilter FoodData={currentFoods}/>
      <FoodCard FoodData={currentFoods}/>

    </>
  );
}


function Foot(){
    return (
        <Footer />
    )
}