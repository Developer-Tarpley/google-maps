import { DistanceProvider } from "../context/context";
import Maps from "./Maps";
import QuoteForm from "./quote-form/Quote_Form";


export default function Pre_Html() {
    return (
        <div className='jumbotron'>
            <DistanceProvider>

                <div className='container-fluid ' >
                    <div >
                        <Maps />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="" id='output'>
                        <QuoteForm />
                    </div>

                </div>
            </DistanceProvider>

        </div>
    )
}