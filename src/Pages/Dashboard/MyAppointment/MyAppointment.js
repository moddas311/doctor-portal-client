import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyAppointment = () => {

    const { user } = useContext(AuthContext);
    

    const url = (`http://localhost:5000/bookings?email=${user?.email}`);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div>
                <h3 className='text-3xl mb-5 ml-10 text-primary'>My Appointment</h3>
            </div>
            <div className="overflow-x-auto mx-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings?.map((booking, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid &&
                                        <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                            className='btn btn-xs bg-secondary border-none text-white'
                                        >Pay</Link>
                                    }
                                    {
                                        booking.price && booking.paid &&
                                        <small className='text-green-600'>Paid</small>
                                    }
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;