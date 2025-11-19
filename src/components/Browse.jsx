import React from 'react';
import { Login } from './Login';
import { Link } from "react-router";

export function Browse(props) {

    return (
        <div>
            <nav>
                <div className="nav-left">
                    <div id="hamburger-menu">
                        <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
                    </div> <Link to="/index" className="home-button">A Gifter's Compass</Link>
                </div>

                <div className="nav-middle">
                    <Link to="/login">
                    <img src="img/compass.jpg" alt="compass" width="60" height="60" />
                    </Link>
                </div>

                <div className="nav-right">
                    <Link to="/browse" className="browse-button">Browse</Link>
                    <Link to="/quiz1" className="take-quiz-btn">Take Quiz</Link>
                    <Link to="/library" className="library-button">Saved Gifts</Link>
                </div>
            </nav>

            <header className="container-fluid text-white py-5">
                <h1 style={{fontSize: "50px"}}> Gift Finder Quiz </h1>
            </header>

            <div>
                <h2 className="Title"> Browse for Gifts </h2>
                <p className="browse-description"> Browse our curated gift collection, who knows, you might stumble upon that
                    perfect
                    gift! </p>
            </div>

            <main>
                <div className="searchBar" style={{textAlign: "center"}}>
                    <input type="text" placeholder="Search for gifts..." />
                </div>
                <div className="mainbox">
                    <div className="category">Hobbies & Interests
                        <div className="wrap-choices">
                            <div className="choices">Painting</div>
                            <div className="choices">Running</div>
                            <div className="choices">Reading</div>
                            <div className="choices">Skiing</div>
                            <div className="choices">Climbing</div>
                            <div className="choices">Hiking</div>
                            <div className="choices">Scrapbooking</div>
                            <div className="choices">Journaling</div>
                            <div className="choices">Photography</div>
                            <div className="choices">Embroidery</div>
                            <div className="choices">History</div>
                            <div className="choices">Sports</div>
                            <div className="choices">Design</div>
                        </div>
                    </div>
                    <div className="category">Personality Types
                        <div className="wrap-choices">
                            <div className="choices">Introverted</div>
                            <div className="choices">Extroverted</div>
                            <div className="choices">Adventurous</div>
                            <div className="choices">Laidback</div>
                            <div className="choices">Creative</div>
                            <div className="choices">Eclectic</div>
                            <div className="choices">Practical</div>
                            <div className="choices">Minimalist</div>
                            <div className="choices">Traditionalist</div>
                            <div className="choices">Humorous</div>
                            <div className="choices">Trendy</div>
                            <div className="choices">Modern</div>
                            <div className="choices">Sleek</div>
                            <div className="choices">Sentimental</div>
                            <div className="choices">Analytical</div>
                            <div className="choices">Empathetic</div>
                        </div>
                    </div>
                    <div className="category">Occassions
                        <div className="wrap-choices">
                            <div className="choices">Birthday</div>
                            <div className="choices">Christmas</div>
                            <div className="choices">Valentine's Day</div>
                            <div className="choices">Mother's Day</div>
                            <div className="choices">Father's Day</div>
                            <div className="choices">Grandparents</div>
                            <div className="choices">Seasonal</div>
                            <div className="choices">Anniversary</div>
                            <div className="choices">Work Celebration</div>
                            <div className="choices">Baby Shower</div>
                            <div className="choices">Halloween</div>
                            <div className="choices">Thanksgiving</div>
                            <div className="choices">Graduation</div>
                            <div className="choices">New Year's</div>
                            <div className="choices">Wedding/Engagement</div>
                            <div className="choices">House Warming</div>
                            <div className="choices">Retirement</div>

                        </div>
                    </div>
                    <div className="category">Lifestyle
                        <div className="wrap-choices">
                            <div className="choices">Student</div>
                            <div className="choices">Homebody</div>
                            <div className="choices">Outdoorsy</div>
                            <div className="choices">Gardner/Plant Parent</div>
                            <div className="choices">Pet Owner</div>
                            <div className="choices">Chef/Foodie</div>
                            <div className="choices">Music Lover</div>
                            <div className="choices">Gamer</div>
                            <div className="choices">Crafter/DIY'er</div>
                            <div className="choices">Fitness/Health</div>
                            <div className="choices">Sustainable/Eco-Friendly</div>
                        </div>
                    </div>
                </div>

                <h2> Popular Collections </h2>
                <p className="browse-description">Take a look through some popular categories!</p>
                <div className="popCollection">
                    <div className="collection">Trending Now
                        <p className="collection-text">Shop the most popular and viral gifts gaining major buzz this season.</p>
                    </div>
                    <div className="collection">Gifts on a Budget
                        <p className="collection-text">Explore our curated selection of gifts under a set price, perfect for smart
                            shoppers.</p>
                    </div>
                    <div className="collection">Last Minute Gifts
                        <p className="collection-text">Find quick, but thoughtul gifts that works for anyone, available with
                            expedited delivery options!</p>
                    </div>
                    <div className="collection">Eco-Friendly Gifts
                        <p className="collection-text">Discover sustainable, ethically made, and zero-waste items that are kind to
                            the planet!</p>
                    </div>
                    <div className="collection">Splurge Worthy
                        <p className="collection-text">Indulge them with premium gifts that are truly unforgettable.</p>
                    </div>
                    <div className="collection">Support Small
                        <p className="collection-text">Shop handmade goods and special items from independent and local artisans.
                        </p>
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
                    <p><a href="giftCompass@uw.edu"><span className="material-icons">email: </span> giftCompass@uw.edu</a>
                    </p>
                    <p><a href="tel:555-123-4567"><span className="material-icons">phone: </span> 555-123-4567</a></p>
                    <p>&copy; A Gifter's Compass 2025</p>
                </div>
            </footer>
        </div>
    )
}