import React from 'react';
import Banner from '../Banner/Banner';
import CarePart from '../CarePart/CarePart';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <Services />
            <CarePart />
            <MakeAppointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;