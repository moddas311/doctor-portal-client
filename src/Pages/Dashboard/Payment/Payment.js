import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const navigation = useNavigation();
    const booking = useLoaderData();
    const { treatment, price, slot, appointmentDate } = booking;

    if (navigation.state === 'loading') {
        return <Loading />
    }

    return (
        <div>
            <h3 className='text-3xl'>Payment</h3>
            <p className='text-xl'>Please pay {treatment}</p>
            <p className='text-xl'>Please pay for <strong className='text-secondary'>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;