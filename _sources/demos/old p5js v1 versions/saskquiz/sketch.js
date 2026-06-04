// Saskatchewan Locations Quiz
// Dan Schellenberg
// Feb 25, 2018

// maybe switch this to using loadTable? would be a nice way to do it...

let myMap;
let canvas;
let saskLocations;
let locationMap = new Map();

const mappa = new Mappa("Leaflet");
const options = {
  lat: 54,
  lng: -106,
  zoom: 5,
  // see other styles at https://wiki.openstreetmap.org/wiki/Tiles
  // original was:
  //   http://{s}.tile.osm.org/{z}/{x}/{y}.png
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",

};

function preload() {
  saskLocations = loadStrings("saskatchewan_locations.txt");
}

function setup(){
  canvas = createCanvas(640,640);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  parseLocationData();
  fill(200, 100, 100);

  // Only redraw the point when the map changes and not every frame.
  myMap.onChange(drawPoints);
}

function draw(){
}

function drawPoints(){
  clear();
  fill(255, 0, 0);

  for (let [name, location] of locationMap) {
    let place = myMap.latLngToPixel(location.lat, location.lng);
    ellipse(place.x, place.y, 20, 20);
  }
}

function parseLocationData() {
  for (let i = 0; i < saskLocations.length; i++) {
    let placeData = saskLocations[i].split(",");
    let name = placeData[0];
    let location = {
      lat: float(placeData[1]),
      lng: float(placeData[2]),
    };
    locationMap.set(name, location);
  }
}
