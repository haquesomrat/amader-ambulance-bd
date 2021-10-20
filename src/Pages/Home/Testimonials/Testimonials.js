import React from 'react';
import { Carousel } from 'react-bootstrap';
import testimonial from '../../../images/testimonial.jfif';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div>
            <div>
                <h1><span className="text-danger">OUR</span> TESTIMONIALS</h1>
            </div>
            <div>
                <Carousel className="carousel1" variant="light m-5 carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={testimonial}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5 className='mb-5'>Thank you for all the services that you have given me over the past  year. You have made sure that I was always given the best care available. Your compassionate attention and professional care saved my life. There are not enough words for me to express my appreciation. Because of your excellent service I have lived to celebrate my 80th birthday and enjoy the company of more great-grandchildren. I will always be grateful for the additional years of life that your care has allowed me to enjoy.</h5>
                            <p>-Mr. Ikramul Haque</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={testimonial}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5 className='mb-5'>Thanking you for your support and what I consider your warm and understanding "bedside manner." You make my visit pleasant and I am appreciative of your efforts and dedication to the healing process.</h5>
                            <p>-Mrs. Elita Akter</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={testimonial}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5 className='mb-5'>We are still fighting to a new pandemic CORONA Virus (COVID-19) with all your help and support. God has no religion and you all are the examples. You have the heart that never hardens, a temper that never tires, a touch that never hurts.</h5>
                            <p>-Mr. Aslam Sheikh</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;