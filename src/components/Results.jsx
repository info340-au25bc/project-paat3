import { Button } from "bootstrap";
import React from "react";
import { GiftCard } from './GiftCardComponent';
import { Link } from "react-router-dom";

export function Results({savingGift}) {
    const giftList = [
        {
            id: 1,
            name: "Smart Mug",
            img: "/public/img/mug.jpg",
            description: "Keeps coffee at the perfect temperature for hours.",
            price: 45,
            tags: "Practical, Tech-savvy",
        },

        {
            id: 2,
            name: "Bluetooth Speaker",
            img: "img/radio.png",
            description: "Waterproof speaker perfect for outdoor adventures.",
            price: 89,
            tags: "Outdoor, Music",
        },

        {
            id: 3,
            name: "Smart Plant Garden",
            img: "img/garden.jpg",
            description: "Indoor hydroponic garden with automatic watering.",
            price: 179,
            tags: "Eco-friendly, Home",
        },

        {
            id: 4,
            name: "Headphones",
            img: "img/mug.jpg",
            description: "High-quality audio with active noise cancellation.",
            price: 249,
            tags: "Tech, Travel",
        }
    ];

    return (
        <div>
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

                <div className="nav-right">
                    <Link to="/browse" className="browse-button">Browse</Link>
                    <Link to="/quiz1" className="take-quiz-btn">Take Quiz</Link>
                    <Link to="/library" className="library-button">Saved Gifts</Link>
                </div>
            </nav>

            <header className="container-fluid text-white py-5">
                <h1 style={{ fontSize: "50px" }}>Your Gift Recommendation</h1>
            </header>

            <main>
                <div>
                    <h2 className="Title">Top Recommendations</h2>
                    <p className="quiz-description">
                        Based on your preferences: Acquaintance, Wedding, Outdoors ($50)
                    </p>
                </div>

                {/* add in the GIFTLIST component */}
                <div className="container">
                    <div className="container">
                        <div className="row justify-content-center">
                            {giftList.map(gift => (
                                <GiftCard key={gift.id} gift={gift} savingGift={savingGift} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom buttons */}
                <div
                    className="text-center mt-4 buttonContainer"
                    style={{ justifyContent: "center", gap: "20px", marginBottom: "50px" }}
                >
                    <Link to="/quiz1" className="buttonBack">Take Quiz Again</Link>
                    <Link to="/browse" className="button">Browse Categories</Link>
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
                    <p>
                        <a href="mailto:giftCompass@uw.edu">
                            <span className="material-icons">email</span> giftCompass@uw.edu
                        </a>
                    </p>
                    <p>
                        <a href="tel:555-123-4567">
                            <span className="material-icons">phone</span> 555-123-4567
                        </a>
                    </p>
                    <p>&copy; A Gifter's Compass 2025</p>
                </div>
            </footer>
        </div>
    );
}
