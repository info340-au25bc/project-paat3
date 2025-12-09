import React, { useState } from 'react';
import { Link, Navigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Footer } from './Footer';

export function Login({ currentUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // if logged in, go to library
    if (currentUser) {
        return <Navigate to="/library" />;
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        const auth = getAuth();
        try {await signInWithEmailAndPassword(auth, email, password);} catch (error) {setErrorMessage(error.message);}
    }

    return (
        <div>
            <nav style={{padding: "20px"}}>
                <div className="nav-login-signup">
                    <img src="/img/compass.jpg" alt="compass" width="60" height="60" />
                    <Link to="/index" className="home-button">A Gifter's Compass</Link>
                </div>
            </nav>
            <header className="container-fluid text-white py-5">
                <h1 style={{ fontSize: "50px" }}>Account Login</h1>
            </header>
            <main>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card col-12 col-md-6 mb-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mt-3 mb-4">Welcome Back!</h2>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="emailInput" className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="emailInput" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordInput" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="passwordInput" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Log in</button>
                                <p className="text-center mt-3">
                                    Don't have an account? <Link to="/signup">Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}