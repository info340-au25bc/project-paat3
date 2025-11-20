import React from 'react';
import { GiftCard } from './GiftCardComponent';


import { Link } from 'react-router';

export function Library({ savedGifts }) {
    const pageHasContent = () => {
        if (savedGifts.length == 0) {
            return <p style={{textAlign:"center"}}>No saved gifts yet!</p>
        } else {
            return savedGifts.map(gift => <GiftCard key={gift.id} gift={gift} />);
        }
    }

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
                <h1 style={{ fontSize: "50px" }}>My Gift Library</h1>
            </header>

            <main>
                <div className="container text-center">
                    <h2 className="mb-4">Your Saved Gifts</h2>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                           {pageHasContent ()}
                           {/* use () because we want to call the func and execute it for its returns, not just ref it.  */}
                    </div>
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
    );
}
