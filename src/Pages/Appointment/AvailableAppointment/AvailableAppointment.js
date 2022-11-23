import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')
    const { data: AppointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['AppointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='mt-16'>
            <div>
                <p className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid my-16 mt-10 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    AppointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                />
            }
        </section>
    );
};

export default AvailableAppointment;