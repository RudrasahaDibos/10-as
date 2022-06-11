import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = (props) => {
    const {serviceId}=useParams();
    console.log(props);
    return (
        <div>
             <h1>Service deatails: {serviceId}</h1>
             <div className='text-center'>
                <Link to='/checkout'>
                  <button className='btn btn-primary'>Proceed checkout</button>
                </Link>

             </div>
        </div>
    );
};

export default ServiceDetails;