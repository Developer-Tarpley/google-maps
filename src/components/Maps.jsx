import React, { useEffect, useState } from 'react';
import { useDistance } from '../context/context';

export default function Maps() {
    const [map, setMap] = useState(null);
    const [directionsService, setDirectionsService] = useState(null);
    const [directionsRenderer, setDirectionsRenderer] = useState(null);
    const { updateDistance } = useDistance();

    useEffect(() => {
        if (window.google && window.google.maps) {
            // Initialize map
            const newMap = new window.google.maps.Map(document.getElementById("map"), {
                zoom: 8,
                center: { lat: -34.397, lng: 150.644 },
                mapTypeControl: false,
            });
            setMap(newMap);

            // Initialize directions service
            const newDirectionsService = new window.google.maps.DirectionsService();
            setDirectionsService(newDirectionsService);

            // Initialize directions renderer
            const newDirectionsRenderer = new window.google.maps.DirectionsRenderer();
            newDirectionsRenderer.setMap(newMap);
            setDirectionsRenderer(newDirectionsRenderer);
        } else {
            console.error("Google Maps API not loaded");
        }
    }, []);

    function calculateAndDisplayRoute() {
        if (!map || !directionsRenderer) {
            console.error("Map or directions renderer is not initialized yet.");
            return;
        }

        const start = document.getElementById("start").value;
        const end = document.getElementById("end").value;

        directionsService.route({
            origin: start,
            destination: end,
            travelMode: window.google.maps.TravelMode.DRIVING,
        })
        .then((response) => {
            // Display new directions
            directionsRenderer.setDirections(response);

            const distance = response.routes[0].legs[0].distance.text;
            const duration = response.routes[0].legs[0].duration.text;
            updateDistance(distance);

            document.getElementById("distance").innerText = `Distance: ${distance}, Duration: ${duration}`;

            clearInputFields(); // Clear input fields after displaying route
        })
        .catch((e) => window.alert("Directions request failed due to " + e.status));
    }

    function clearInputFields() {
        document.getElementById("start").value = "";
        document.getElementById("end").value = "";
    }

    return (
        <div className='container-fluid'>
            <h1>Find Distance Between Two Places</h1>
            <p>This app will help you calculate your travel distances</p>
            <form className='form-horizontal'>
                <div className='form-group'>
                    <label htmlFor='start' className='col-xs-2 control label'>Origin</label>
                    <div className='col-xs-4'>
                        <input type='text' id='start' placeholder='Origin' className='form-control' />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='end' className='col-xs-2 control label'>Destination</label>
                    <div className='col-xs-4'>
                        <input type='text' id='end' placeholder='Place/ destination' className='form-control' />
                    </div>
                </div>
            </form>
            <div className='col-xs-offset-2 col-xs-10 mt-2'>
                <button className='btn btn-info btn-lg' onClick={calculateAndDisplayRoute}>Calculate</button>
                <div id="distance"></div>
            </div>
            <div id="map" style={{ width: '100%', height: '400px' }}>Map</div>
        </div>
    );
}