import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const CarePart = () => {
    return (
        <div className="hero py-16">
            <div className="gap-20 hero-content flex-col lg:flex-row">
                <img className='lg:w-1/2 rounded-lg shadow-2xl' alt='' src={treatment} />
                <div>
                    <h1 className="text-[48px] font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Treatment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default CarePart;