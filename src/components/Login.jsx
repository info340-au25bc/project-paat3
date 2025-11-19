import React from 'react';
import { Signup } from './Signup';
import { Link } from 'react-router';

export function Login(props) {
    return (
        <div>
            <nav>
                {/* <div className="nav-left"> </div> */}
                <div className="nav-login-signup">
                    <img src="img/compass.jpg" alt="compass" width="60" height="60" />
                    <Link to="/login" className="home-button">A Gifter's Compass</Link>
                </div>
            </nav>

            <header className="container-fluid text-white py-5">
                <h1 style={{ fontSize: "50px" }}>Account Login</h1>
            </header>

            <main>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card w-50 mb-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mt-3 mb-4">Welcome Back!</h2>

                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <Link to="/index" className="btn btn-primary" role="button">Log in</Link>
                                <p className="text-center mt-3">
                                    Don't have an account? <Link to="/signup">Sign Up</Link>
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
                    <p><a href="mailto:email@coffee.uw.edu"><span className="material-icons">email: </span> giftCompass@uw.edu</a>
                    </p>
                    <p><a href="tel:555-123-4567"><span className="material-icons">phone: </span> 555-123-4567</a></p>
                    <p>&copy; A Gifter's Compass 2025</p>
                </div>
            </footer>
        </div>
    );
}