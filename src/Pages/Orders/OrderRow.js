import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete, handleStatusUpdate}) =>
{
    const {serviceName, customer, price, service, phone, _id, status} = order; 
    // console.log(order)
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`https://y-ten-rust.vercel.app/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    },[service])

   

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost bg-gray-400 rounded-[50%]'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-2xl w-20 h-20">
                            {
                                orderService.img && 
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-error btn-sm">{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;