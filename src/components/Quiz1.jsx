import React from "react";
import { Link } from "react-router-dom"; // use Link for SPA routing

export function Quiz1() {
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

      {/* QUIZ HEADER */}
      <header className="container-fluid text-white py-5">
        <h1 style={{ fontSize: "50px" }}>Gift Finder Quiz</h1>
      </header>

      {/* MAIN PORTION */}
      <div>
        <h2 className="Title">Let's Find the Perfect Gift!</h2>
        <p className="quiz-description">Fill out this quiz and our compass will lead you to the perfect gifts!</p>
      </div>

      {/* Progress bar */}
      <div className="container">
        <div className="progress-step">
          <p>Step 1 of 4</p>
          <div className="progress-bar"></div>
        </div>
      </div>

      {/* Quiz card */}
      <main>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card w-50 mb-5">
            <div className="card-body">
              <h2 className="card-title ps-3 mt-3 mb-4">Who is the recipient to you?</h2>

              <label className="ps-3">
                <input type="radio" name="option" value="Friend" /> Friend
              </label><br />
              <label className="ps-3">
                <input type="radio" name="option" value="Family Member" /> Family Member
              </label><br />
              <label className="ps-3">
                <input type="radio" name="option" value="Romantic Partner" /> Romantic Partner
              </label><br />
              <label className="ps-3">
                <input type="radio" name="option" value="Colleague" /> Colleague
              </label><br />
              <label className="ps-3">
                <input type="radio" name="option" value="Acquaintance" /> Acquaintance
              </label><br />
              <label className="ps-3">
                <input type="radio" name="option" value="Other" /> Other
              </label>
            </div>

            <div className="buttonContainer" style={{ justifyContent: "flex-end" }}>
              <Link to="/quiz2" className="button">Next</Link>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer>
        <div id="social-links">
          <a href="https://www.instagram.com/accounts/login/"><i className="fa fa-instagram" aria-label="instagram"></i></a>
          <a href="https://x.com/i/flow/login"><i className="fa fa-twitter-square" aria-label="twitter"></i></a>
          <a href="https://www.facebook.com/login.php/"><i className="fa fa-facebook-square" aria-label="facebook"></i></a>
          <a href="https://github.com/login"><i className="fa fa-github" aria-label="github"></i></a>
        </div>

        <div className="container">
          <p><a href="mailto:giftCompass@uw.edu"><span className="material-icons">email</span> giftCompass@uw.edu</a></p>
          <p><a href="tel:555-123-4567"><span className="material-icons">phone</span> 555-123-4567</a></p>
          <p>&copy; A Gifter's Compass 2025</p>
        </div>
      </footer>
    </div>
  );
}