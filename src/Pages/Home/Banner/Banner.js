import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner1.jpg';
import banner2 from '../../../images/Banner/banner2.jpg';
import banner3 from '../../../images/Banner/banner3.jpg';
import banner4 from '../../../images/Banner/banner4.jpg';
import banner5 from '../../../images/Banner/banner5.jpg';
import './banner.css';

const Banner = () => {
    return (
        <>
            <Carousel fade className=" carousel pt-5 pb-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="AC Ambulance"
                    />
                    <Carousel.Caption>
                        <h3>AC AMBULANCE</h3>
                        <p>ONLINE AMBULANCE SERVICE IN BANGLADESH</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="ICU AMBULANCE"
                    />

                    <Carousel.Caption>
                        <h3>ICU AMBULANCE</h3>
                        <p>ONLINE AMBULANCE SERVICE IN BANGLADESH</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="AIR AMBULANCE"
                    />

                    <Carousel.Caption>
                        <h3>AIR AMBULANCE</h3>
                        <p>ONLINE AMBULANCE SERVICE IN BANGLADESH</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="FREEZER AMBULANCE"
                    />

                    <Carousel.Caption>
                        <h3>FREEZER AMBULANCE</h3>
                        <p>ONLINE AMBULANCE SERVICE IN BANGLADESH</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="NON-AC AMBULANCE"
                    />

                    <Carousel.Caption>
                        <h3>NON-AC AMBULANCE</h3>
                        <p>ONLINE AMBULANCE SERVICE IN BANGLADESH</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;