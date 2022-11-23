import React from 'react';
import appointment from '../../../../assets/images/appointment.png';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className='text-center py-16'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='py-5'>
                <h4 className='text-xl font-bold text-primary'>Connect Us</h4>
                <h3 className='text-2xl text-white'>Stay Connected With Us</h3>
            </div>
            <div>
                <input type="email" placeholder="Email Address" className="input w-full max-w-xs" />
            </div>
            <div className='my-4'>
                <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
            </div>
            <div>
                <textarea className="textarea w-full max-w-xs" placeholder="Your Message"></textarea>
            </div>
            <div className='mt-2'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;