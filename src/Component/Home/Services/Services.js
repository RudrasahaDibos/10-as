import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const[services,setservices]=useState([]);
    useEffect(()=>{
     fetch('Services.json')
     .then(res=>res.json())
     .then(data=>setservices(data))

    },[])
    return (
        <div >
            <h1 id="service"className='service-title container'> MY services</h1>
            <div  className='services-container'>
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;