import React from 'react';
import useServices from '../../hooks/useService';

const ManageService = () => {
    const [services, setServices] = useServices();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are your sure");
        if (proceed) {
            const url = `https://stark-castle-32190.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                });

        }
    }

    return (
        <div className='w-25 mx-auto'>
            <h2>Manage your service</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h4>

                </div>)
            }
        </div>
    );
};

export default ManageService;