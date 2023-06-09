import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Information></Information>
           <Products></Products>
           <Teams></Teams>
        </div>
    );
};

export default Home;