import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FoodInput} from './FoodInput';
import { FoodFilter } from './FoodFilter';
import { FoodCard } from './FoodCard';


export function Listings({show,
    handleShow,
    handleClose,
    newFood,
    handleChange,
    HandleSubmit,
    FoodData,
    HandleFilter
})
{
    return [
        <Head />,
        <Body show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              newFood={newFood}
              handleChange={handleChange}
              HandleSubmit={HandleSubmit}
              FoodData={FoodData}
              HandleFilter={HandleFilter}
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
    HandleSubmit,
    FoodData,
    HandleFilter
}){
    return (
        <main className="px-4 py-2">
            <div className="search-container ms-4">
                <input type="text" className="search-input" placeholder="-"/>
                <button type="button" className="search-button">Search</button>
            </div>
            <FoodInput
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                newFood={newFood}
                handleChange={handleChange}
                HandleSubmit={HandleSubmit}
            />
            <FoodFilter HandleFilter={HandleFilter} />
            <FoodCard FoodData={FoodData}/>
        </main>
    )
}

function Foot(){
    return (
        <Footer />
    )
}