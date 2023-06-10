import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
   
   
    const {id} = useParams();
    console.log("from payment",id);
   
    return (
        <div className="w-1/2">
            <h3>this is payment page</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={id}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;