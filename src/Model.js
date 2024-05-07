'use strict';
let map;
// Define the initMap function
export async function initMap() {
  // Set location at Seattle
  const position = { lat: 47.608013, lng: -122.335167 };

  // Create a map element
  const mapElement = document.createElement("div");
  mapElement.setAttribute("id", "mapElement");
  // Set intial size of map
  mapElement.style.height = "400px";
  mapElement.style.width = "100%";
  // Import needed library
  const { Map } =await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Append the map element to the body
  let main = document.querySelector('#mapMain');
  main.appendChild(mapElement);

  // Render the map
  map = new Map(mapElement, {
      zoom: 12,
      center: position,
      mapId: 'Seattle'
  });

  return map;
}
//add new marker on google map, takes a position in the format
//{lat:x,lng:y} and name of the marker. 
//Probably new more modification but will let it be now. 
export function addMarker(marker){
  google.maps.importLibrary("marker").then(({ AdvancedMarkerElement }) => {
    // Add new position to markers array
    // Clear existing markers and add new ones
    if(marker&&marker.length!==0){
      marker.forEach((mark) =>{
        const marker = new AdvancedMarkerElement({
          position: {lat:mark.lat,lng:mark.lng},
          map: map,
          title: mark.title,
          content:buildContent(mark.content)
      })
      })
    }
  })
}

function buildContent(content){
  content.style.width='50px';
  content.style.height='50px';
  return content;
  
}