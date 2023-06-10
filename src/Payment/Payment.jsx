import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div className="w-1/2">
            <h3>this is payment page</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;