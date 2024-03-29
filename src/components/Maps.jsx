import React, { useEffect } from 'react';

export default function Maps() {
    let map;
    let directionsService;
    let directionsRenderer;

    function initMap() {
        map = new window.google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: { lat: -34.397, lng: 150.644 },
            mapTypeControl: false,
        });

        directionsService = new window.google.maps.DirectionsService();
        directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
    }

    function calculateAndDisplayRoute() {
        const start = document.getElementById("start").value;
        const end = document.getElementById("end").value;

        directionsService
            .route({
                origin: start,
                destination: end,
                travelMode: window.google.maps.TravelMode.DRIVING,
            })
            .then((response) => {

                directionsRenderer.setDirections(response);

                const distance = response.routes[0].legs[0].distance.text;
                const duration = response.routes[0].legs[0].duration.text;

                document.getElementById("distance").innerText = `Distance: ${distance}, Duration: ${duration}`;
            })
            .catch((e) => window.alert("Directions request failed due to " + e.status));
    }

    useEffect(() => {
        if (window.google && window.google.maps) {
            initMap();
        } else {
            console.error("Google Maps API not loaded");
        }
    }, []);

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
            <div className='col-xs-offset-2 col-xs-10'>
                <button className='btn btn-info btn-lg' onClick={calculateAndDisplayRoute}>Calculate</button>
            </div>
            <div id="map" style={{ width: '100%', height: '400px' }}>Map</div>
            <div id="distance"></div>
        </div>
    );
}



