'use strict';

let map;

export async function initMap() {
  const position = { lat: 47.608013, lng: -122.335167 };
  const mapElement = document.createElement("div");

  mapElement.setAttribute("id", "mapElement");
  mapElement.style.height = "400px";
  mapElement.style.width = "100%";

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  let main = document.querySelector('#mapMain');
  main.appendChild(mapElement);

  map = new Map(mapElement, {
    zoom: 12,
    center: position,
    mapId: 'Seattle'
  });

  return map;
}

export function addMarker(marker) {
  google.maps.importLibrary("marker").then(({ AdvancedMarkerElement, PinElement }) => {
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

function buildContent(mark, PinElement) {
  let icon = document.createElement('div');
  icon.innerHTML = `<i class="fa-solid fa-train"></i>`;
  const iconPin = new PinElement({
    glyph: icon,
    scale: 1.5,
  });
  return iconPin.element;
}