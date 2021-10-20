import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div className="login-form">
                <div>
                    <h2 className="text-danger">Please Login</h2>
                    <br />
                    <form>
                        <input className="inputs" type="email" placeholder="Enter Your E-mail" />
                        <br />
                        <input className="inputs" type="password" />
                        <br />
                        <input className="btn btn-danger" type="submit" value="Submit" />
                    </form>
                    <br />
                    <p className="text-danger">Don't have an account?</p>
                    <Link className="text-dark" to="/registration">Registration</Link>
                    <br />
                    <br />
                    <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;