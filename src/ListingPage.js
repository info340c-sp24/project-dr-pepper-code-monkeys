import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FoodInput} from './FoodInput';
import { FoodFilter } from './FoodFilter';
import { FoodCard } from './FoodCard';


export function Listings({
    show,
    handleShow,
    handleClose,
    newFood,
    handleChange,
    handleSubmit,
    FoodData,
    handleFilter,
    error,
    filterValue
}) {
    return [
        <Head />,
        <Body show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              newFood={newFood}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              FoodData={FoodData}
              handleFilter={handleFilter}
              error={error}
              filterValue={filterValue}
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
    FoodData,
    handleFilter,
    error,
    filterValue
}) {
    return (
        <main className="px-4 pb-2 pt-4 listingPage">
            <FoodInput
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                newFood={newFood}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                error={error}
            />
            <FoodFilter handleFilter={handleFilter} filterValue={filterValue} />
            <FoodCard FoodData={FoodData}/>
        </main>
    );
}

function Foot(){
    return (
        <Footer />
    );
}