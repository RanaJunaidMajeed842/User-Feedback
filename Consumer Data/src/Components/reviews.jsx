import React from "react"
import { useState,useEffect } from "react"

function Reviews() {
    const [users, setUsers] = useState([]);
    
    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    };
    
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="parent-commentBox">
             <div className="container mt-4">
                <div className="row">
                {users.map((user) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={user.id}>
                        <div className="card text-white h-100">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <i className="fa-solid fa-user"></i>
                                    <span>{user.name}</span>
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                                <p className="card-text">{user.email}</p>
                                <div className="links">
                                <a href={`mailto:${user.email}`} className="card-link">
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>Email</span>
                                </a>
                                <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="card-link">
                                    <i className="fa-solid fa-globe"></i>
                                    <span>Website</span>
                                </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Reviews