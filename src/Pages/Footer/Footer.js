import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container mt-5 position-sticky pt-5">
            <div className="d-flex align-items-start flex-column">
                <h1 className="text-danger "><span>SERVICE HOURS</span></h1>
                <br />
                <h2>24/7 Supporting</h2>
                <h2>01973745665</h2>
            </div>
            <div className="d-flex align-items-start flex-column">
                <h1 className="text-dark"><span>OUR SERVICES</span></h1>
                <br />
                <p>Ac Ambulance</p>
                <p>Non-Ac Ambulance</p>
                <p>Freezer Ambulance</p>
                <p>ICU Ambulance</p>
                <p>Air Ambulance</p>
                <p>Boat Ambulance</p>
            </div>
            <div className="d-flex align-items-start flex-column">
                <h1 className="d-flex align-items-start flex-column"><span className="text-danger">OUR </span>BRANCHES</h1>
                <br />
                <p>Dhaka</p>
                <p>Chittagong</p>
                <p>Rajshahi</p>
                <p>Gazipur</p>
                <p>Mymensingh</p>
            </div>
            <div className="d-flex align-items-start flex-column">
                <h1 className="d-flex align-items-start flex-column"> <span className="text-danger">Contact </span>Informations</h1>
                <br />
                <h3>WhatsApp</h3>
                <h2 className="emergency bg-success p-2 border border-dark border-4 rounded-pill">01973745665</h2>
                <br />
                <h6>Email:amaderambulance24.7@gamil.com</h6>
            </div>
        </div >
    );
};

export default Footer;