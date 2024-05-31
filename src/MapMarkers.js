'use strict';
//add new marker on google map, takes a position
//{lat:x,lng:y}, a title, image of food, and expiration date. 

//Now only implemented position, title, and image and will need to work on styling
//Probably new more modifications but will let it be now. 
export function addMarker(marker){
  google.maps.importLibrary("marker").then(({ AdvancedMarkerElement, PinElement }) => {
    // Add new position to markers array
    // Clear existing markers and add new ones
    if(marker&&marker.length!==0){
      marker.forEach((mark) =>{
        const pinScaled = new PinElement({
          scale: 2,
        })
        const marker = new AdvancedMarkerElement({
          position: {lat:mark.lat,lng:mark.lng},
          map: map,
          title: mark.title,
          content:buildContent(mark,PinElement)
      })
      })
    }
  })
}

function buildContent(mark,PinElement){
  let icon = document.createElement('div');
  icon.innerHTML =`<i class="fa-solid fa-train"></i>`
  const iconPin = new PinElement({
    glyph:icon,
    scale:1.5,
  })
  return iconPin.element;
}
