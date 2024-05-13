import React from 'react';
import { Header } from './createHeader';
import { Footer } from './createFooter';
import { FoodInput, Example} from './createFoodInput';
import { FoodFilter } from './createFoodFilter';
import { FoodCard } from './createFoodCard';


//These are information needed to creates each card and filter function, these should be able to be modified somewhere. 
let FoodData = [{Food:'Bread',Location:'Seattle',Title:'Loaves of Bread', Img:'/img/bread.jpg',Zip:'98102'},
                {Food:'Oreo',Location:'Ballard',Title:'Oreo', Img:'/img/oreos.jpg',Zip:'98102'},
                {Food:'Apple Juice',Location:'U District',Title:'Apple Juice', Img:'/img/applejuice.jpg',Zip:'98102'},
               ]
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
            <FoodInput FoodData={{FoodData}} />
            <FoodFilter FoodData={FoodData} />
            <FoodCard FoodData={FoodData} />
        </main>
    )
}


function Foot(){
    return (
        <Footer />
    )
}