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
  height: '500px'
};

const center = {
  lat: 47.6062, // Seattle latitude
  lng: -122.3321 // Seattle longitude
};

const markerPositions = [
  {
    position: {lat: 47.6205, lng: -122.3493}, //Space Needle
    title: 'Space Needle',
    description: 'Test Space Needle'
},
{
  position: {lat: 47.6097, lng: -122.3331}, //Pike Place
  title: 'Pike Place Market',
  description: 'test pike place'
},
];
  

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAZR9PLUAH6mNaa8XYLcyBq1q0INnmpsTs"
  })

  const [map, setMap] = React.useState(null)
  const [selectedMarker, setSelectedMarker] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

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
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */
          markerPositions.map((marker, index) => (
            <Marker key={index}
            position={marker.position}
            title={marker.title}
            label={{
              text: marker.title,
              color: 'black',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
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