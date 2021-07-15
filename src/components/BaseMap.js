import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import "./BaseMap.css";

const BaseMap = (props) => {

    mapboxgl.accessToken =
    "pk.eyJ1Ijoicm9iaW52aDE0IiwiYSI6ImNrcjNkajIxZTJocmUydXFoajAyd3YxZjQifQ.ldZlll41kWNhaR90oHcoFA";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(props.lng);
    const [lat, setLat] = useState(props.lat);
    const [zoom, setZoom] = useState(13);
        
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        const nav = new mapboxgl.NavigationControl();
        map.current.addControl(nav, "top-right");
    });


    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    });

    useEffect(() => {
        if (props.data !== undefined) {
          props.data.forEach((i) => {
            let popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                    '<br><strong>'+i.fields.facilityname+'</strong><p>Plaatsen<br><i>'+i.fields.freeplaces+'/'+i.fields.totalplaces+'</i></p>'
                );
            // create the marker
            new mapboxgl.Marker(<DirectionsBikeIcon></DirectionsBikeIcon>) 
            .setLngLat(i.geometry.coordinates)
            .setPopup(popup) // sets a popup on this marker
            .addTo(map.current);                
          });
        }
      }, [props.data]);









  return(
      <>
        <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div className="map-container">
            <div ref={mapContainer} className="d-flex map" />
        </div>
      </>
  );
};

export default BaseMap;
