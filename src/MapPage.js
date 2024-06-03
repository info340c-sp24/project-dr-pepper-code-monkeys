import React, {useEffect, useState} from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
export function FoodMap(){
    return[
        <Head />,
        <Body />,
        <Foot />
    ]

}

const containerStyle = {
  width: '100%',
  height: document.documentElement.clientHeight
};

const center = {
  lat: 47.641, // Seattle latitude
  lng: -122.3321 // Seattle longitude
};

const markerPositions = [
{
  position: {lat: 47.747180975160994, lng: -122.34958247672098}, 
  title: 'World Concern - Food Distribution Center',
  description: 'Food Bank in Aurora Square'
},
{
  position: { lat: 47.73263530987889, lng: -122.33481959829862 },
  title: 'Little Free Food Pantry Meridian',
  description: 'Neigborhood Mini Pantry in Meridian'
},
{
  position: { lat: 47.73840788563621, lng: -122.29980067738978 },
  title: 'Little Free Food Pantry',
  description: 'Neigborhood Mini Pantry'
},
{
  position: { lat: 47.72247402238884, lng: -122.28503779896192 },
  title: 'Hunger Intervention Program / Community Meal / Lake City Community Center - Food Distribution Center',
  description: 'Food Distribution Center in Lake City Community Center'
},
{
  position: { lat: 47.71600671625096, lng: -122.28812770374797 },
  title: 'Little Free Food Pantry',
  description: 'Neigborhood Mini Pantry'
},
{
  position: { lat: 47.71346576919371, lng: -122.36022548208973 },
  title: 'Community House - Firwood - Food Distribution Center',
  description: 'Food Distribution Center at Community House Firwood'
},
{
  position: { lat: 47.67972873436003, lng: -122.35335902700304 },
  title: 'Lutheran Alliance To Create Housing - Food Distribution Center',
  description: 'Food Distribution Center at Lutheran Alliance To Create Housing'
},
{
  position: { lat: 47.670250709973146, lng: -122.31937007435623 },
  title: 'University District Food Bank',
  description: 'Food Bank in University District'
},
{
  position: { lat: 47.65545230391543, lng: -122.35507564077308 },
  title: 'Little Free Food Pantry, Fremont',
  description: 'Neigborhood Mini Pantry in Fremont'
},
{
  position: { lat: 47.61534955343213, lng: -122.34574518813447 },
  title: 'Noel House - Food Distribution Center',
  description: 'Food Distribution Center at Noel House'
},
{
  position: { lat: 47.61461312525099, lng: -122.34307476381203 },
  title: 'Plymouth Housing Group - Food Distribution Center',
  description: 'Food Distribution Center at Plymouth Housing Group'
},
{
  position: { lat: 47.613549377346075, lng: -122.3408898711846 },
  title: "YWCA Angelines' Center - Food Distribution Center",
  description: "Food Distribution Center at YWCA Angelines' Center"
},
{
  position: { lat: 47.61755877611995, lng: -122.29233670168475 },
  title: 'Little Free Food Pantry',
  description: 'Neigborhood Mini Pantry'
},
{
  position: { lat: 47.60888499684442, lng: -122.30665988668693 },
  title: 'Little Free Food Pantry',
  description: 'Neigborhood Mini Pantry'
},
{
  position: { lat: 47.60544781841822, lng: -122.30386807944073 },
  title: 'Little Free Food Pantry',
  description: 'Neigborhood Mini Pantry'
},
{
  position: { lat: 47.60225713364114, lng: -122.33596610394008 },
  title: 'OSL',
  description: 'Food Bank at OSL'
},
{
  position: { lat: 47.60067417177291, lng: -122.33514954021645 },
  title: 'Bread of Life Mission - Food Distribution Center',
  description: 'Food Distribution Center at Bread of Life Mission'
},
{
  position: { lat: 47.58146834150404, lng: -122.31126505130061 },
  title: 'Little Free Food Pantry',
  description: 'Neigborhood Mini Pantry'
},
{
  position: { lat: 47.57320560124795, lng: -122.28850333750499 },
  title: 'Little Free Food Pantry',
  description: 'Neigborhood Mini Pantry'
},
{
  position: { lat: 47.56797185824302, lng: -122.31596029271162 },
  title: 'Little Free Food Pantry',
  description: 'Neigborhood Mini Pantry'
}
];

// On Google Maps, search "Food shelters near Seattle"
// All Food Shelters from that search below:
// World Concern - Food Distribution Center 47.74879690933603, -122.34683589468891
// Little Free Food Pantry Meridian 47.73263530987889, -122.33481959829862
// Little Free Food Pantries 47.73840788563621, -122.29980067738978
// Hunger Intervention Program / Community Meal / Lake City Community Center - Food Distribution Center 47.72247402238884, -122.28503779896192
// Little free pantry 47.71600671625096, -122.28812770374797
// Community House - Firwood - Food Distribution Center 47.71346576919371, -122.36022548208973
// Lutheran Alliance To Create Housing - Food Distribution Center 47.67972873436003, -122.35335902700304
// University District Food Bank 47.670250709973146, -122.31937007435623
// Little Free Pantry, Fremont 47.65545230391543, -122.35507564077308
// Noel House - Food Distribution Center 47.61534955343213, -122.34574518813447
// Plymouth Housing Group - Food Distribution Center 47.61461312525099, -122.34307476381203
// YWCA Angelines' Center - Food Distribution Center 47.613549377346075, -122.3408898711846
// Little Free Food Pantry 47.61755877611995, -122.29233670168475
// Little Food Pantry 47.60888499684442, -122.30665988668693
// The Little Free Pantries 47.60544781841822, -122.30386807944073
// OSL 47.60225713364114, -122.33596610394008
// Bread of Life Mission - Food Distribution Center 47.60067417177291, -122.33514954021645
// Little Free Pantry 47.58146834150404, -122.31126505130061
// The Little Free Pantries 47.57320560124795, -122.28850333750499
// The Little Free Pantries 47.56797185824302, -122.31596029271162
  

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAZR9PLUAH6mNaa8XYLcyBq1q0INnmpsTs"
  })

  const [map, setMap] = React.useState(null)
  const [selectedMarker, setSelectedMarker] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
<<<<<<< HEAD
=======

>>>>>>> b0b78c149f55e2d2a956f094893bbaa30f14ebfa
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClick = () => {
  setSelectedMarker(null);
  };
  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */
          markerPositions.map((marker, index) => (
            <Marker key={index}
            position={marker.position}
            title={marker.title}
            onClick={()=>handleMarkerClick(marker)}
            />
            
          ))} 
        {selectedMarker && (
        <InfoWindow position={selectedMarker.position} onCloseClick={handleInfoWindowClick}>
          <div>
            <h2>{selectedMarker.title}</h2>
            <p>{selectedMarker.description}</p>
          </div>
        </InfoWindow>)

        }
        <></>
      </GoogleMap>
  ) : <></>
}

const MapComponent = React.memo(MyComponent);

function Body() {
  return (
    <div id="mapMain">
      <div id="map">
        <MapComponent />
      </div>
    </div>
  );
}


//create header
function Head(){
    return (
        <Header />
    )
}

//create footer
function Foot(){
    return (
        <Footer />
    )
}