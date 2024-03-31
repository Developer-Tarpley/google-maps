
import Maps from "./Maps";
import QuoteForm from "./quote-form/Quote_Form";
import { useDistance } from "../context/context";
import QuoteModal from "./quote-form/Quote_Modal";



export default function Pre_Html() {
    const { showQuoteModal } = useDistance()
    return (
        <div className='jumbotron'>

            {/* {showQuoteModal && <QuoteModal/>} */}

            <div className='container-fluid ' >
                <div >
                    <Maps />
                </div>
            </div>
            <div className="container-fluid">
                <div className="" id='output'>
                    {
                        showQuoteModal ?
                            <QuoteModal /> :
                            <QuoteForm />
                    }
                </div>

            </div>

        </div>
    )
}