'use strict';

// This file is just used to do some test calls. 


import * as module from './Model.js';
module.initMap();
let markers=[]
let img=document.createElement('img');
img.src = '/project-draft/img/apples.jpg';
markers.push({ lat: 47.606, lng: -122.332 ,title:'Apples',img:img });
let img2=document.createElement('img');
img2.src = '/project-draft/img/graham.jpg';
markers.push({ lat: 47.707, lng: -122.332, title:'Graham',img:img2});
let img3=document.createElement('img');
img3.src = '/project-draft/img/groundbeef.jpg';
markers.push({ lat: 47.505, lng: -122.332, title:'Ground Beef',img:img3});
module.addMarker(markers);


