'use strict';

export function addMarker(marker){
  google.maps.importLibrary("marker").then(({ AdvancedMarkerElement, PinElement }) => {
    if (marker && marker.length !==0) {
      marker.forEach((mark) => {
        const pinScaled = new PinElement({
          scale: 2,
        })
        const markerElement = new AdvancedMarkerElement({
          position: {lat:mark.lat,lng:mark.lng},
          map: map,
          title: mark.title,
          content:buildContent(mark,PinElement)
        });
      });
    }
  });
}

function buildContent(mark,PinElement){
  let icon = document.createElement('div');
  icon.innerHTML = `<i class="fa-solid fa-train"></i>`
  const iconPin = new PinElement({
    glyph: icon,
    scale: 1.5,
  });
  return iconPin.element;
}
