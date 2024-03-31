
import { useDistance } from '../../context/context'

export default function QuoteForm() {
    // Access distance context
    const { distance, setShowQuoteModal,
        selectedService, setSelectedService,
        selectedAdditionalServices, setSelectedAdditionalServices,
        selectedLockoutService, setSelectedLockoutService,
        setTotalQuote
    } = useDistance();

    const basicSvc = 40;
    const allInclusiveSvc = 60;
    const axleCheck = 15;
    const roadSideFlat = 15;
    const utiltySvc = 15;
    const lockoutSvc = 25;



    const handleSubmit = (event) => {
        event.preventDefault();
        // Calculate total cost based on user inputs
        // Set the total cost state

        let selSvcCount = 0;
        let selAddSvcCount = 0;
        let selLockSvcCount = 0;

        // write if staements for the individual value to be calculated.
        // console.log('distance', distance)
        // console.log('selectedService', selectedService)

        if (selectedService === 'Basic Transport') {
            selSvcCount = selSvcCount + basicSvc;
        } else if (selectedService === 'All Inclusive Transport') {
            selSvcCount = selSvcCount + allInclusiveSvc;
        }

        // console.log('selectedAdditionalServices', selectedAdditionalServices)
        if (selectedAdditionalServices && selectedAdditionalServices.length > 0) {
            if (selectedAdditionalServices.includes('Axle Check')) {
                selAddSvcCount = selAddSvcCount + axleCheck;
                // console.log('selAddSvcCount',selAddSvcCount)
            }
            if (selectedAdditionalServices.includes('Road Side Flat')) {
                selAddSvcCount = selAddSvcCount + roadSideFlat;
                // console.log('selAddSvcCount',selAddSvcCount)
            }
            if (selectedAdditionalServices.includes('Utility Service')) {
                selAddSvcCount = selAddSvcCount + utiltySvc;
                // console.log('selAddSvcCount',selAddSvcCount)
            }
        }

        // console.log('selectedLockoutService', selectedLockoutService)
        if (selectedLockoutService === true) {
            selLockSvcCount = selLockSvcCount + lockoutSvc;
        }

        // console.log('selSvcCount', selSvcCount)
        // console.log('selAddSvcCount', selAddSvcCount)
        // console.log('selLockSvcCount', selLockSvcCount)

        let total = (parseInt(selSvcCount) + parseInt(selAddSvcCount) + parseInt(selLockSvcCount))
        // console.log(total)
        setTotalQuote(total)
        // console.log('totalQuote', totalQuote)
        // basic with all should be 110 total
        // all inclusive  with all should be 130 total
        setShowQuoteModal(true)

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
                {/* <label htmlFor='distance' className='col-xs-2 control-label'>Distance</label> */}
                <div className='col-xs-4'>
                    {/* <input type='text' id='distance' placeholder='Distance' className='form-control' /> */}
                    {/* Display distance value */}
                    <p>Current Travel Distance: {distance}</p>
                </div>
            </div>
            <form className='form-horizontal' onSubmit={handleSubmit}>
                {/* Service Type */}
                <div className='form-group'>
                    <fieldset className='col-xs-4'>
                        <legend>Service Type</legend>
                        {
                            distance === '' ?
                                (
                                    <>
                                        <label className="form-check-label" htmlFor="basicTransport">Basic Transport</label><br />
                                        <label className="form-check-label" htmlFor="inclusiveTransport">All Inclusive Transport</label>
                                    </>


                                ) : (
                                    <>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="basicTransport"
                                                value="Basic Transport"
                                                checked={selectedService === 'Basic Transport'}
                                                onChange={() => handleServiceChange('Basic Transport')}
                                            />
                                            <label className="form-check-label" htmlFor="basicTransport">Basic Transport - Price: ${basicSvc}</label>
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
                                            <label className="form-check-label" htmlFor="inclusiveTransport">All Inclusive Transport - Price: ${allInclusiveSvc}</label>
                                        </div>
                                    </>)
                        }

                    </fieldset>
                </div>
                {/* Additional Services */}
                <div className='form-group'>
                    <fieldset className='col-xs-4'>
                        <legend>Additional Services</legend>
                        {
                            distance === '' ?
                                (<>
                                    <label className="form-check-label" htmlFor="axleCheck">Axle Check</label><br />
                                    <label className="form-check-label" htmlFor="roadSideFlat">Road Side Flat</label><br />
                                    <label className="form-check-label" htmlFor="utilityService">Utilty Service</label>
                                </>) :
                                (
                                    <>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="axleCheck"
                                                value="Axle Check"
                                                checked={selectedAdditionalServices.includes('Axle Check')}
                                                onChange={() => handleAdditionalServicesChange('Axle Check')}
                                            />
                                            <label className="form-check-label" htmlFor="axleCheck">Axle Check - Price: ${axleCheck}</label>
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
                                            <label className="form-check-label" htmlFor="roadSideFlat">Road Side Flat - Price: ${roadSideFlat}</label>
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
                                            <label className="form-check-label" htmlFor="utilityService">Utilty Service - Price: ${utiltySvc}</label>
                                        </div>
                                    </>
                                )
                        }

                    </fieldset>
                </div>
                {/* Lockout Service */}
                <div className='form-group'>
                    <fieldset className='col-xs-4'>
                        <legend>Lockout Service</legend>
                        {
                            distance === '' ?
                                (
                                    <label className="form-check-label" htmlFor="lockoutService">Lockout Service</label>
                                ) :
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="lockoutService"
                                        checked={selectedLockoutService}
                                        onChange={handleLockoutServiceChange}
                                    />
                                    <label className="form-check-label" htmlFor="lockoutService">Lockout Service - Price: ${lockoutSvc}</label>
                                </div>
                        }

                    </fieldset>
                </div>
                {/* Submit button */}
                <div className='form-group'>
                    <div className='col-xs-offset-2 col-xs-10'>
                        {
                            selectedService !== null && distance !== '' ?
                                <button type="submit" className='btn btn-info btn-lg'>Submit</button> :
                                <button type="submit" className='btn btn-outline-secondary btn-lg' disabled={true}>Submit</button>
                        }

                    </div>
                </div>

            </form>
            <br />
            {
                 distance === '' ?
                <p className='text-secondary fs-2'>1. Enter Location And Destination</p> : null
            }
            {
                 selectedService === null ?
                <p className='text-secondary fs-2'>2. Choose A Service To Continue</p> : null
            }

        </div>
    );
}
