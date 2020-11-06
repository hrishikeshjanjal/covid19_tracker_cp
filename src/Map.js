import React from "react";
import "./Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
};

export default Map;

//npm i react-leaflet
// All the packages need to be installed for this project:
//  npm i  :
// @material-us/core
// react-leaflet  (The Map)
// leaflet        (Also the Map)
// react-chartjs-2 chart.js   (graph chart chartjs)
// numeral  (for formating numbers.. (currency, percentages, decimal places))
