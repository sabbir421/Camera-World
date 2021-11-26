import React from 'react';
import Banner from '../Banner/Banner';
import GetReviews from '../GetReviews/GetReviews';
import Offer from '../Offer/Offer';
import Cameras from '../Cameras/Cameras';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cameras></Cameras>
            <Offer></Offer>
            <GetReviews></GetReviews>
            
            
        </div>
    );
};

export default Home;