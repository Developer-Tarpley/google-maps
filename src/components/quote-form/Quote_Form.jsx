import React, { useState } from 'react';
import { useDistance } from '../../context/context'

export default function QuoteForm() {
    // Access distance context
    const { distance } = useDistance();
    const [totalCost, setTotalCost] = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedAdditionalServices, setSelectedAdditionalServices] = useState([]);
    const [selectedLockoutService, setSelectedLockoutService] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Calculate total cost based on user inputs
        // Set the total cost state

        // write if staements for the individual value to be calculated.
        console.log('distance',distance)
        console.log('selectedService',selectedService)
        console.log('selectedAdditionalServices',selectedAdditionalServices)
        console.log('selectedLockoutService',selectedLockoutService)
    };

    const handleServiceChange = (value) => {
        setSelectedService(value);
    };

    const handleAdditionalServicesChange = (value) => {
        const index = selectedAdditionalServices.indexOf(value);
        if (index === -1) {
            setSelectedAdditionalServices([...selectedAdditionalServices, value]);
        } else {
            setSelectedAdditionalServices(selectedAdditionalServices.filter(service => service !== value));
        }
    };

    const handleLockoutServiceChange = () => {
        setSelectedLockoutService(!selectedLockoutService);
    };

    return (
        <div className="container-fluid">
            <h1>Quote Your Destination</h1>
            <p>This app will help you calculate your destination quote</p>
            <div className='form-group'>
                <label htmlFor='distance' className='col-xs-2 control-label'>Distance</label>
                <div className='col-xs-4'>
                    {/* <input type='text' id='distance' placeholder='Distance' className='form-control' /> */}
                    {/* Display distance value */}
                    <p>Distance: {distance}</p>
                </div>
            </div>
            <form className='form-horizontal' onSubmit={handleSubmit}>
                {/* Service Type */}
                <div className='form-group'>
                    <fieldset className='col-xs-4'>
                        <legend>Service Type</legend>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="basicTransport"
                                value="Basic Transport"
                                checked={selectedService === 'Basic Transport'}
                                onChange={() => handleServiceChange('Basic Transport')}
                            />
                            <label className="form-check-label" htmlFor="basicTransport">Basic Transport</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="inclusiveTransport"
                                value="All Inclusive Transport"
                                checked={selectedService === 'All Inclusive Transport'}
                                onChange={() => handleServiceChange('All Inclusive Transport')}
                            />
                            <label className="form-check-label" htmlFor="inclusiveTransport">All Inclusive Transport</label>
                        </div>
                    </fieldset>
                </div>
                {/* Additional Services */}
                <div className='form-group'>
                    <fieldset className='col-xs-4'>
                        <legend>Additional Services</legend>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="axleCheck"
                                value="Axle Check"
                                checked={selectedAdditionalServices.includes('Axle Check')}
                                onChange={() => handleAdditionalServicesChange('Axle Check')}
                            />
                            <label className="form-check-label" htmlFor="axleCheck">Axle Check</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="roadSideFlat"
                                value="Road Side Flat"
                                checked={selectedAdditionalServices.includes('Road Side Flat')}
                                onChange={() => handleAdditionalServicesChange('Road Side Flat')}
                            />
                            <label className="form-check-label" htmlFor="roadSideFlat">Road Side Flat</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="utilityService"
                                value="Utility Service"
                                checked={selectedAdditionalServices.includes('Utility Service')}
                                onChange={() => handleAdditionalServicesChange('Utility Service')}
                            />
                            <label className="form-check-label" htmlFor="utilityService">Utilty Service</label>
                        </div>
                    </fieldset>
                </div>
                {/* Lockout Service */}
                <div className='form-group'>
                    <fieldset className='col-xs-4'>
                        <legend>Lockout Service</legend>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="lockoutService"
                                checked={selectedLockoutService}
                                onChange={handleLockoutServiceChange}
                            />
                            <label className="form-check-label" htmlFor="lockoutService">Lockout Service</label>
                        </div>
                    </fieldset>
                </div>
                {/* Submit button */}
                <div className='form-group'>
                    <div className='col-xs-offset-2 col-xs-10'>
                        <button type="submit" className='btn btn-info btn-lg'>Submit</button>
                    </div>
                </div>
            </form>
            {/* Modal to display total estimated cost */}
            {/* Include modal component */}
        </div>
    );
}
