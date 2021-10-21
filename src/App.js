// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import { Component } from "react";

import MapApp from "./Components/MapApp";
import Map from "./Components/Map";
import * as a from "./Components/MapApp";
import { curLng, curLat } from "../src/Components/Map";
import firebase from "./firebase";
import fire from "./firebase";

function CurrLocationAdd() {
  let CurLocation = fire.database().ref("CurrentLocation").set({
    CurrentLatitude: curLat,
    CurrentLongitude: curLng,
  });
  fire.database().ref("CurrentLocation").push(CurLocation);
  alert(`Longitude : ${curLng} , Latitude: ${curLat}`);
}

// <Switch />;
// <MapApp />
function App() {
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <MapApp />
      </div>
      <div style={{ textAlign: "right" }}>
        <button onClick={CurrLocationAdd}>
          Save Current Location to database
        </button>
      </div>
    </div>
  );
}

export default App;
