import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
import './CheckOutForm.css'


const CheckoutForm = ({id}) => {

    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState(' ');
    const [clientSecret, setClientSecret] = useState(' ');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState();
    const [singleData, setSingleData] = useState(null);
    const[selectedClass] = useCart();
   


    useEffect(() => {
        fetch(`http://localhost:4000/selectedClasses/${id}`)
        .then(res => res.json())
        .then(data => {
            setSingleData(data)
            console.log(data)
        }
       
            )
            
     }, [id])

const {price}= singleData || {};

    useEffect(()=> {
      if(price > 0){
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
      }
    }, [price, axiosSecure])


    const handleSubmit = async(event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }

        console.log('card', card)

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('error', error);
            setCardError(error.message)
        }
        else{
            setCardError(' ')
            console.log('paymentMethod', paymentMethod)
        }

        setProcessing(true);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email: user?.email || 'anonymous'
                },
              },
            },
          );
            if(confirmError){
                console.log(confirmError)
            }
            console.log('payment intent',paymentIntent)

            setProcessing(false)
            if(paymentIntent.status === 'succeeded'){
                setTransactionId(paymentMethod.id)
                // save payment information to the server
                const payment = {
                    
                    email: user?.email, 
                    transactionId: paymentMethod.id,
                    price,
                    date: new Date(),
                    quantity: selectedClass.length,
                    itemNames: selectedClass.map(item => item.name),
                    items: selectedClass.map(item => item._id),
                    classItems: selectedClass.map(item => item.classId)
                }

                axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Completed',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

            }
    }

    return (
       <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-success mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
       {cardError && <p className="text-red-500 ml-8">{cardError}</p>}
       {transactionId && <p className="text-green-600">Transaction Complete with Transaction id: ${transactionId}</p>}
       </>
    );
};

export default CheckoutForm;