'use strict';

let map;

// Define the initMap function to initialize the Google Map
export async function initMap() {
  // Set location at Seattle
  const position = { lat: 47.608013, lng: -122.335167 };

  // Create a map element
  const mapElement = document.createElement("div");
  mapElement.setAttribute("id", "mapElement");
  // Set initial size of map
  mapElement.style.height = "400px";
  mapElement.style.width = "100%";
  // Import needed library
  const { Map } = await google.maps.importLibrary("maps");
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

export function addMarker(marker) {
  google.maps.importLibrary("marker").then(({ AdvancedMarkerElement, PinElement }) => {
    // Add new position to markers array
    // Clear existing markers and add new ones
    if (marker && marker.length !== 0) {
      marker.forEach((mark) => {
        const pinScaled = new PinElement({
          scale: 2,
        });
        const markerElement = new AdvancedMarkerElement({
          position: { lat: mark.lat, lng: mark.lng },
          map: map,
          title: mark.title,
          content: buildContent(mark, PinElement),
        });
      });
    }
  });
}

// Build content for marker
function buildContent(mark, PinElement) {
  let icon = document.createElement('div');
  icon.innerHTML = `<i class="fa-solid fa-train"></i>`;
  const iconPin = new PinElement({
    glyph: icon,
    scale: 1.5,
  });
  return iconPin.element;
}