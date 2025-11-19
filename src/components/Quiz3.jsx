import React from "react";
import { Link } from "react-router-dom";

export function Quiz3() {
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

        <div className="nav-right" style={{ marginRight: "30px" }}>
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
        <p className="quiz-description">
          Fill out this quiz and our compass will lead you to the perfect gifts!
        </p>
      </div>

      {/* Progress bar */}
      <div className="container">
        <div className="progress-step">
          <p>Step 3 of 4</p>
          <div className="progress-bar"></div>
        </div>
      </div>

      {/* Quiz card */}
      <main>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card w-50 mb-5">
            <div className="card-body">
              <h2 className="card-title ps-3 mt-3 mb-4">How would you describe their personality?</h2>
              <p style={{ paddingLeft: "20px", marginBottom: "10px" }}>Select all that apply:</p>

              <div className="quiz3-container">
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Adventurous" />
                  Adventurous
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Practical" />
                  Practical
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Sophisticated" />
                  Sophisticated
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Humorous" />
                  Humorous
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Organized" />
                  Organized
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Intellectual" />
                  Intellectual
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Laidback" />
                  Laidback
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Minimalist" />
                  Minimalist
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Creative" />
                  Creative
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Sentimental" />
                  Sentimental
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Trendy" />
                  Trendy
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Introverted" />
                  Introverted
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Extroverted" />
                  Extroverted
                </label>
                <label className="ps-3">
                  <input type="checkbox" style={{ borderRadius: "10px" }} name="option" value="Health Conscious" />
                  Health Conscious
                </label>
              </div>
            </div>

            <div className="buttonContainer">
              <Link to="/quiz2" className="buttonBack">Back</Link>
              <Link to="/quiz4" className="button">Next</Link>
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
