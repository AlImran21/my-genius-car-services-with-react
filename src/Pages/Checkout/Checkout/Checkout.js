import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetails from '../../../hooks/useServiceDetails';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user, loading, error] = useAuthState(auth);

    /* const [user, setUser] = useState({
        name: "Helen",
        email: "helen@yahoo.com",
        address: "newYork",
        phone: "+256987850"
    });

    const handleAddressChange = (event) => {
        console.log(event.target.value);
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        console.log(newUser);
        setUser(newUser);
    } */

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post("https://stark-castle-32190.herokuapp.com/order", order)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    toast("Your order is booked");
                    event.target.reset();
                }
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-50 mb-2 p-2 rounded' value={user?.displayName} type="text" name="name" id="" placeholder='Name' required readOnly />
                <br />
                <input className='w-50 mb-2 p-2 rounded' value={user?.email} type="email" name="email" id="" placeholder='Email' required readOnly />
                <br />
                <input className='w-50 mb-2 p-2 rounded' value={service.name} type="text" name="service" id="" placeholder='Service' required />
                <br />
                <input className='w-50 mb-2 p-2 rounded' value={user.address} type="text" name="address" id="" placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-50 mb-2 p-2 rounded' value={user.phone} type="text" name="phone" id="" placeholder='Phone' autoComplete='off' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;