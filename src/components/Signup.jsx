import React from 'react';
import { Link } from 'react-router';

export function Signup(props) {
    return (
        <div>
            <nav>
                    <div className="nav-left"> </div>
                    <div className="nav-middle">
                        <img src="img/compass.jpg" alt="compass" width="60" height="60" />
                        <Link to="/signup" className="home-button">A Gifter's Compass</Link>
                    </div>
                </nav>

            <header className="container-fluid text-white py-5">
                <h1 style={{fontSize: "50px"}}> Create Account</h1>
            </header>

            <main>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card w-50 mb-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mt-3 mb-4">Join Us!</h2>


                            <form className="p-3">
                                <div className="mb-3">
                                    <label for="nameInput" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="nameInput" />
                                </div>
                                <div className="mb-3">
                                    <label for="emailInput" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="emailInput" />
                                </div>
                                <div className="mb-3">
                                    <label for="passwordInput" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="passwordInput" />
                                </div>
                                <div className="mb-3">
                                    <label for="confirmPasswordInput" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPasswordInput" />
                                </div>
                                <Link to="index" className="btn btn-primary">Create account</Link>
                                <p className="text-center mt-3">
                                    Already have an account? <Link to="/login">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div id="social-links">
                    <a href="https://www.instagram.com/accounts/login/"><i className="fa fa-instagram"
                        aria-label="instagram"></i></a>
                    <a href="https://x.com/i/flow/login"><i className="fa fa-twitter-square" aria-label="twitter"></i></a>
                    <a href="https://www.facebook.com/login.php/"><i className="fa fa-facebook-square"
                        aria-label="facebook"></i></a>
                    <a href="https://github.com/login"><i className="fa fa-github" aria-label="github"></i></a>
                </div>
                <div className="container">
                    <p><a href="mailto:giftCompass@uw.edu"><span className="material-icons">email: </span> giftCompass@uw.edu</a>
                    </p>
                    <p><a href="tel:555-123-4567"><span className="material-icons">phone: </span> 555-123-4567</a></p>
                    <p>&copy; A Gifter's Compass 2025</p>
                </div>
            </footer>
        </div>
    );
}