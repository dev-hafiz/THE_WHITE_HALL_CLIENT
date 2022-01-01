import React from 'react';
import About from '../About/About';
import Packages from '../Packages/Packages';


import Banner from './Banner/Banner';
import CustomerReviews from './CustomerReviews/CustomerReviews';
const Home = () => {
    return (
<div>
<Banner></Banner>
<About></About>
<Packages></Packages>
<CustomerReviews></CustomerReviews>

        </div>
    );
};

export default Home;