import React, {useEffect} from 'react';
import { Header } from './createHeader';
import { Footer } from './createFooter';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
export function FoodMap(){
    return[<Head />,
           <Body />,
           <Foot />
    ]

}


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAZR9PLUAH6mNaa8XYLcyBq1q0INnmpsTs"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

function Body(){

    return <>React.memo(MyComponent)</>
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