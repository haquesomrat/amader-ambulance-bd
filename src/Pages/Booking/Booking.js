import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className="text-success m-5 p-5">You successfully booked an ambulance</h2>
        </div>
    );
};

export default Booking;