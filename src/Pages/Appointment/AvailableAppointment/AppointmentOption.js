import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    const { name, slots, price } = appointmentOption;

    return (
        <div className="card shadow-xl">
            <div className="card-body  text-center">
                <h2 className="text-2xl font-semibold text-primary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Tray Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p>price: ${price }</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary tex-white"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;