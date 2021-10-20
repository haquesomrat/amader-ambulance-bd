import React from 'react';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonials/Testimonials';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;