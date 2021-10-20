import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, shortdes } = service;
    return (
        <div className="single-service">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{shortdes}</p>
            <Link to={`/details`}>
                <Button variant="success">Details</Button>{' '}</Link>
            <Link to={`/booking/${id}`}>
                < Button variant="success">Book here</Button>{' '}</Link>
        </div >
    );
};

export default Service;