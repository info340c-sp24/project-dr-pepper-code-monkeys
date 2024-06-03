import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

// Returns food map react fragment
export function FoodMap() {
  return (
    <>
      <Head />
      <Body />
      <Foot />
    </>
  );
}

const containerStyle = {
  width: '100%',
  height: document.documentElement.clientHeight,
};

const center = {
  lat: 47.641, // Seattle latitude
  lng: -122.3321, // Seattle longitude
};

const markerPositions = [
  {
    position: { lat: 47.747180975160994, lng: -122.34958247672098 },
    title: 'World Concern - Food Distribution Center',
    description: 'Food Bank in Aurora Square',
  },
  {
    position: { lat: 47.73263530987889, lng: -122.33481959829862 },
    title: 'Little Free Food Pantry Meridian',
    description: 'Neighborhood Mini Pantry in Meridian',
  },
  {
    position: { lat: 47.73840788563621, lng: -122.29980067738978 },
    title: 'Little Free Food Pantry',
    description: 'Neighborhood Mini Pantry',
  },
  {
    position: { lat: 47.72247402238884, lng: -122.28503779896192 },
    title: 'Hunger Intervention Program / Community Meal / Lake City Community Center - Food Distribution Center',
    description: 'Food Distribution Center in Lake City Community Center',
  },
  {
    position: { lat: 47.71600671625096, lng: -122.28812770374797 },
    title: 'Little Free Food Pantry',
    description: 'Neighborhood Mini Pantry',
  },
  {
    position: { lat: 47.71346576919371, lng: -122.36022548208973 },
    title: 'Community House - Firwood - Food Distribution Center',
    description: 'Food Distribution Center at Community House Firwood',
  },
  {
    position: { lat: 47.67972873436003, lng: -122.35335902700304 },
    title: 'Lutheran Alliance To Create Housing - Food Distribution Center',
    description: 'Food Distribution Center at Lutheran Alliance To Create Housing',
  },
  {
    position: { lat: 47.670250709973146, lng: -122.31937007435623 },
    title: 'University District Food Bank',
    description: 'Food Bank in University District',
  },
  {
    position: { lat: 47.65545230391543, lng: -122.35507564077308 },
    title: 'Little Free Food Pantry, Fremont',
    description: 'Neighborhood Mini Pantry in Fremont',
  },
  {
    position: { lat: 47.61534955343213, lng: -122.34574518813447 },
    title: 'Noel House - Food Distribution Center',
    description: 'Food Distribution Center at Noel House',
  },
  {
    position: { lat: 47.61461312525099, lng: -122.34307476381203 },
    title: 'Plymouth Housing Group - Food Distribution Center',
    description: 'Food Distribution Center at Plymouth Housing Group',
  },
  {
    position: { lat: 47.613549377346075, lng: -122.3408898711846 },
    title: "YWCA Angelines' Center - Food Distribution Center",
    description: "Food Distribution Center at YWCA Angelines' Center",
  },
  {
    position: { lat: 47.61755877611995, lng: -122.29233670168475 },
    title: 'Little Free Food Pantry',
    description: 'Neighborhood Mini Pantry',
  },
  {
    position: { lat: 47.60888499684442, lng: -122.30665988668693 },
    title: 'Little Free Food Pantry',
    description: 'Neighborhood Mini Pantry',
  },
  {
    position: { lat: 47.60544781841822, lng: -122.30386807944073 },
    title: 'Little Free Food Pantry',
    description: 'Neighborhood Mini Pantry',
  },
  {
    position: { lat: 47.60225713364114, lng: -122.33596610394008 },
    title: 'OSL',
    description: 'Food Bank at OSL',
  },
  {
    position: { lat: 47.60067417177291, lng: -122.33514954021645 },
    title: 'Bread of Life Mission - Food Distribution Center',
    description: 'Food Distribution Center at Bread of Life Mission',
  },
  {
    position: { lat: 47.58146834150404, lng: -122.31126505130061 },
    title: 'Little Free Food Pantry',
    description: 'Neighborhood Mini Pantry',
  },
  {
    position: { lat: 47.57320560124795, lng: -122.28850333750499 },
    title: 'Little Free Food Pantry',
    description: 'Neighborhood Mini Pantry',
  },
  {
    position: { lat: 47.56797185824302, lng: -122.31596029271162 },
    title: 'Little Free Food Pantry',
    description: 'Neighborhood Mini Pantry',
  },
];

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAZR9PLUAH6mNaa8XYLcyBq1q0INnmpsTs",
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

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
    >
      {markerPositions.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          title={marker.title}
          onClick={() => handleMarkerClick(marker)}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={handleInfoWindowClick}
        >
          <div>
            <h2>{selectedMarker.title}</h2>
            <p>{selectedMarker.description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : <></>;
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

function Head() {
  return <Header />;
}

function Foot() {
  return <Footer />;
}
