import React from 'react';
import { Link } from 'react-router';


export function Index(props) {
    return (
        <div>
            <div className="header">
            <nav>
                <div className="nav-left">
                    <div id="hamburger-menu">
                        <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
                    </div>
                    <Link to="/index" className="home-button">A Gifter's Compass</Link>
                </div>

                <div className="nav-middle">
                    <img src="/img/compass.jpg" alt="compass" width="60" height="60" />
                </div>

                <div className="nav-right" style={{ marginRight: "30px" }}>
                    <Link to="/browse" className="browse-button">Browse</Link>
                    <Link to="/quiz1" className="take-quiz-btn">Take Quiz</Link>
                    <Link to="/library" className="library-button">Saved Gifts</Link>
                </div>
            </nav>

            <header className="container-fluid text-white py-5">
                <h1 className="header-title">A Gifter's Compass</h1>
                <p className="main_description">Navigate the world of gift-giving with ease.</p>
            </header>

            <main>
                <div className="container text-center">
                    <h2 className="mb-4">Why Choose a Gifter's Compass?</h2>
                    <div className="row justify-content-center">

                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="card mb-4 w-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <img src="/img/curation-icon.png" alt="curation icon" className="pb-3" />
                                        </div>
                                        <div className="col-sm">
                                            <h2 className="card-title">Personalized Matches</h2>
                                            <p className="card-text">Our intelligent quiz analyzes personality traits, hobbies, and interests to find gifts that truly resonate with your recipient.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="card mb-4 w-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <img src="/img/magnifyingGlass.png" alt="magnifying glass icon" className="pb-3" />
                                        </div>
                                        <div className="col-sm">
                                            <h2 className="card-title">Centralized Discovery</h2>
                                            <p className="card-text">No more endless scrolling through countless websites. We curate the best gift options from across the internet in one place.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="card mb-4 w-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <img src="/img/pen.png" alt="pen icon" className="pb-3" />
                                        </div>
                                        <div className="col-sm">
                                            <h2 className="card-title">Thoughtful Curation</h2>
                                            <p className="card-text">From practical gadgets to unique trinkets, every suggestion is carefully selected to make your gift-giving meaningful.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h3 className="mb-4">How it works</h3>

                    <div className="row justify-content-center">

                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="card mb-4 w-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <img src="/img/one.png" alt="the number one" className="pb-3" />
                                        </div>
                                        <div className="col-sm">
                                            <h2 className="card-title">Share Details</h2>
                                            <p className="card-text">Tell us about the recipient's personality, interests, and hobbies through our simple quiz.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="card mb-4 w-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <img src="/img/two.png" alt="the number two" className="pb-3" />
                                        </div>
                                        <div className="col-sm">
                                            <h2 className="card-title">Get Matched</h2>
                                            <p className="card-text">Our system analyzes your input and curates a personalized list of gift recommendations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-3 d-flex">
                            <div className="card mb-4 w-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-auto col-xl-12">
                                            <img src="/img/three.png" alt="the number three" className="pb-3" />
                                        </div>
                                        <div className="col-sm">
                                            <h2 className="card-title">Select</h2>
                                            <p className="card-text">Browse your curated options and select the perfect gift that will bring joy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container text-center">
                    <h4 className="mb-4">Ready to find the perfect gift?</h4>
                    <p className="lead mb-5">Let's turn gift-giving from a burden into a delightful experience.</p>
                    <Link to="/quiz1" className="btn btn-dark" style={{ fontSize: "40px", backgroundColor: "#588175" }}>
                        Take Quiz!
                    </Link>
                </div>

            </main>

            <footer>
                <div id="social-links">
                    <a href="https://www.instagram.com/accounts/login/"><i className="fa fa-instagram" aria-label="instagram"></i></a>
                    <a href="https://x.com/i/flow/login"><i className="fa fa-twitter-square" aria-label="twitter"></i></a>
                    <a href="https://www.facebook.com/login.php/"><i className="fa fa-facebook-square" aria-label="facebook"></i></a>
                    <a href="https://github.com/login"><i className="fa fa-github" aria-label="github"></i></a>
                </div>

                <div className="container">
                    <p><a href="mailto:giftCompass@uw.edu"><span className="material-icons">email: </span> giftCompass@uw.edu</a></p>
                    <p><a href="tel:555-123-4567"><span className="material-icons">phone: </span> 555-123-4567</a></p>
                    <p>&copy; A Gifter's Compass 2025</p>
                </div>
            </footer>

        </div>
                    </div>

    );
}
