
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import './Location.css';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFmaXp1cnJhaGFtYW4iLCJhIjoiY2t4YTlzMXh5MDhnZjJvcXExY3M2eGhxdCJ9.kWOWkCqkx4KvwLF9f8sLpw';

const Location = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.399452, 23.777176],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])

    return (
    <div>
          <h2 className=" my-5 packages-header p-3 m-3 mx-auto text-center">
      Locate Us  </h2>
          <div className="mapWrapper">
             
            <div id="map"></div>

        </div>
    </div>
    );
};

export default Location;