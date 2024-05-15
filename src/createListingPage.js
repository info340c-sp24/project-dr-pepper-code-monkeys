import React, { useState } from 'react';
import { Header } from './createHeader';
import { Footer } from './createFooter';
import { FoodInput} from './createFoodInput';
import { FoodFilter } from './createFoodFilter';
import { FoodCard } from './createFoodCard';


export function Listings({show,
    handleShow,
    handleClose,
    newFood,
    handleChange,
    handleSubmit,
    FoodData})
{
    return [
        <Head />,
        <Body show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              newFood={newFood}
              handleChange={handleChange}
              handleSubmit={handleSubmit} 
              FoodData={FoodData}
        />,
        <Foot />
    ]
}

function Head(){
    return(
        <Header />
    )
}


//Creates body
function Body({
    show,
    handleShow,
    handleClose,
    newFood,
    handleChange,
    handleSubmit,
    FoodData

}){
    return (
        <main className="container">
            <UpdateDataThenRender 
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            newFood={newFood}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            FoodData={FoodData}
            />
        </main>
    )
}

//This function create main body of the page, it handles 
//food input and create each food card and filter. No content
//will be generated before initial input. 
function UpdateDataThenRender({
    show,
    handleShow,
    handleClose,
    newFood,
    handleChange,
    handleSubmit,
    FoodData
})
{

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
      <FoodFilter FoodData={FoodData}/>
      <FoodCard FoodData={FoodData}/>

    </>
  );
}


function Foot(){
    return (
        <Footer />
    )
}