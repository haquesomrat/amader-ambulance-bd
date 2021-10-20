import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../images/logo.jpg';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="m-2 nav-bar sticky-top" bg="light" variant="light">
                <Container>
                    <img className="logo" src={logo} alt="" />
                    <Navbar.Brand className="fw-bold " href="#home">Amader Ambulance Bangaladesh</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-danger" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-danger" as={HashLink} to="/services">Our Services</Nav.Link>
                        <Nav.Link className="text-danger" as={HashLink} to="/booking">Booking</Nav.Link>
                        <Nav.Link className="text-danger" as={HashLink} to="/registration">Registration</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link className="text-danger" as={HashLink} to="/login">Log In</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;