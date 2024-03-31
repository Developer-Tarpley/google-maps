
import { useDistance } from "../../context/context";
import './styles.css';



export default function Quote_Modal() {
    const { setShowQuoteModal,
        selectedService, setSelectedService,
        selectedAdditionalServices, setSelectedAdditionalServices,
        selectedLockoutService, setSelectedLockoutService,
        totalCost, setTotalCost,
        totalQuote, distance
    } = useDistance()
    // console.log(distance)
    let distanceRegex = distance.match(/\d+?\.\d+/g);
    // console.log(parseFloat(distanceRegex))
    let perMile = (distanceRegex * 3.25).toFixed(2);
    let total = (parseFloat(perMile) + totalQuote).toFixed(2);
    setTotalCost(total);




    function handleNewQuote() {
        setShowQuoteModal(false)
        setSelectedService(null);
        setSelectedAdditionalServices([]);
        setSelectedLockoutService(false);

    }
    return (
        <div className="container-fluid ">
            <p className="btn btn-info" style={{ cursor: 'pointer' }} onClick={handleNewQuote}>New Ouote</p>
            <div className="">
                <h2>Your Initial Quote</h2>
                <h4>You have chosen the following services</h4>
                <div className="container fluid">
                    <h4>Main Service:</h4>
                    {selectedService && selectedService === 'Basic Transport' && <p>Basic Transport </p>}
                    {selectedService && selectedService === 'All Inclusive Transport' && <p>All Inclusive Transport</p>}
                    <h4>Additional Services:</h4>
                    {
                        selectedAdditionalServices && selectedAdditionalServices.length > 0 ?

                            selectedAdditionalServices.map(item => <p key={item}>{item}</p>)

                            : null
                    }
                    <h4>Lockout Service:</h4>
                    {selectedLockoutService && selectedLockoutService === true && <p>Lockout Service</p>}
                </div>
                <br />
                <br />
                <hr />
                <p className="fs-4">
                    Quote Total: ${totalQuote}
                    <br />
                    <span>+ </span>
                    Service Distance: ${perMile}
                </p>
                <hr className="p-1 rounded bg-secondary" />
                <p className="fs-3">Estimated Cost: ${totalCost}</p>
            </div>
        </div>
    )
}