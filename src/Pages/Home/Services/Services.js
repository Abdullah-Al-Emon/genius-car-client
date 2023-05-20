import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () =>
{
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('')
    const searchRef = useRef();
    useEffect(() =>
    {
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? "asc" : "desc"}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which don't look even slightly believable. </p>
                <input ref={searchRef} type="text" placeholder="Type here" className="input w-full max-w-xs input-bordered mr-3" /> 
                 <button onClick={handleSearch} className='btn'>Search</button> <br />
                <button className='btn btn-ghost btn-outline mt-2' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mb-5'><button className="btn btn-error btn-outline">More Services</button></div>
        </div>
    );
};

export default Services;