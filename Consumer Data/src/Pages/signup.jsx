import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/', {name, email, password})
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="text-center mt-5">Sign Up</h2>
                    <form onSubmit={HandleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                placeholder="Name"
                                required 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                placeholder="Email"
                                required 
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
                                placeholder="Password"
                                required 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    </form>
                    <div className="text-center mt-3">
                        <p>Already have an account?</p>
                        <Link to="/login" className="btn btn-secondary">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
