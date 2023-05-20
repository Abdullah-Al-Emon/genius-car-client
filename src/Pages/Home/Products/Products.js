import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>
    {
        fetch('https://y-ten-rust.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mb-10'>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">Popular Products</p>
                <h2 className="text-5xl font-semibold">Browse Our Products</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center mb-5'><button className="btn btn-error btn-outline">More Products</button></div>
        </div>
    );
};

export default Products;