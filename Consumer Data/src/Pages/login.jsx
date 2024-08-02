import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/login', {email, password})
            .then(result => {
                console.log(result);
                if(result.data === "Success"){
                    navigate('/home');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="text-center mt-5">Login</h2>
                    <form onSubmit={HandleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                required 
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                name="password" 
                                required 
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className="text-center mt-3">
                        <p>Don't have an account?</p>
                        <Link to="/" className="btn btn-secondary">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
