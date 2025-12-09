import React, { useState } from 'react';
import { Link, Navigate } from 'react-router';
import { Footer } from './Footer';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export function Signup({ currentUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // for display name
    const [errorMessage, setErrorMessage] = useState(''); // show errors

    // if user is already logged in, redirect them to the Library
    if (currentUser) {
        return <Navigate to="/library" />;
    }

    const handleSignUp = async (event) => {
        event.preventDefault(); // stop form from refreshing page
        setErrorMessage(''); // clear old errors

        const auth = getAuth();
        try {
            // create User
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // add their name to their profile
            await updateProfile(userCredential.user, { displayName: username });
            // app.jsx listener will handle the rest
        } catch (error) {setErrorMessage(error.message);}
    }
    return (
        <div>
            <nav>
                    {/* <div className="nav-left"> </div> */}
                    <div className="nav-login-signup"> <img src="img/compass.jpg" alt="compass" width="60" height="60" />
                        <Link to="/signup" className="home-button">A Gifter's Compass</Link>
                    </div>
                </nav>

                <header className="container-fluid text-white py-5">
                <h1 style={{fontSize: "50px"}}>Create Account</h1>
            </header>

            <main>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card col-12 col-md-6 mb-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mt-3 mb-4">Join Us!</h2>
                            {/* show error message if exists */}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                            <form className="p-3" onSubmit={handleSignUp}>
                                <div className="mb-3">
                                    <label htmlFor="nameInput" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="nameInput" value={username} onChange={(e) => setUsername(e.target.value)}required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailInput" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordInput" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="passwordInput" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                </div>
    
                                <button type="submit" className="btn btn-primary w-100">Create Account</button>
                                
                                <p className="text-center mt-3">
                                    Already have an account? <Link to="/login">Login</Link>
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