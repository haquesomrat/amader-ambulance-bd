import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signInUsingGoogle } = useAuth();

    const auth = getAuth();

    //event handle
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        else {
            registerNewUser(email, password);
        }

    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }



    return (
        <div>
            <div className="login-form">
                <div>
                    <h2 className="text-dark ">Create New Account</h2>
                    <br />
                    <form onSubmit={handleRegistration}>
                        <input onBlur={handleEmailChange} className="inputs" type="email" placeholder="Enter Your E-mail " required />

                        <br />
                        <input onBlur={handlePasswordChange} className="inputs" type="password" placeholder="Password" required />
                        <br />
                        <input onBlur={handlePasswordChange} className="inputs" type="password" placeholder="Re-type Password" required />
                        <br />
                        <input className="btn btn-danger" type="submit" value="Submit" />
                        <br />
                        <div className="text-danger">{error}</div>
                    </form>
                    <br />
                    <p className="text-danger">Already Registered?</p>
                    <Link className="text-dark" to="/login">Log In</Link>
                    <br />
                    <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;