import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../hooks/useCart";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    // const [selectedClass] = useCart();
    const {user, loading} = useContext(AuthContext);
    const [payment, setPayment] = useState([]);
    const {id} = useParams();
    console.log(id);
    //  console.log(selectedClass)
    // const total = selectedClass.reduce((item, sum) => sum + item.price, 0);
     useEffect(() => {
        fetch(`http://localhost:4000/selectedClasses/${id}`)
        .then(res => res.json())
        .then(data => setPayment(data))
     }, [id])
    
     console.log(payment.price)
    // const price = parseFloat(total.toFixed(2))
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