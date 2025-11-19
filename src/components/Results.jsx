import React from "react";
import { Link } from "react-router-dom";

export function Results(props) {
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

        <div className="container">
          <div className="row justify-content-center">

            {/* Card 1 */}
            <div className="col-12 col-md-6 col-xl-3 d-flex">
              <div className="card mb-4 w-100">
                <img src="/img/mug.jpg" className="card-img-top d-block mx-auto pt-3" alt="smart mug" />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">Smart Mug</h3>
                  <p className="card-text">Keeps coffee at the perfect temperature for hours.</p>
                  <p className="card-text"><strong>Price:</strong> $45</p>
                  <p className="card-text"><small className="text-muted"><strong>Tags:</strong> Practical, Tech-savvy</small></p>
                  <div className="mt-auto d-flex gap-2">
                    <a href="#" className="btn btn-dark">Shop</a>
                    <Link to="/library" className="btn btn-outline-dark">Save</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-xl-3 d-flex">
              <div className="card mb-4 w-100">
                <img src="/img/radio.png" className="card-img-top d-block mx-auto pt-3" alt="bluetooth speaker" />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">Bluetooth Speaker</h3>
                  <p className="card-text">Waterproof speaker perfect for outdoor adventures.</p>
                  <p className="card-text"><strong>Price:</strong> $89</p>
                  <p className="card-text"><small className="text-muted"><strong>Tags:</strong> Outdoor, Music</small></p>
                  <div className="mt-auto d-flex gap-2">
                    <a href="#" className="btn btn-dark">Shop</a>
                    <Link to="/library" className="btn btn-outline-dark">Save</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-xl-3 d-flex">
              <div className="card mb-4 w-100">
                <img src="/img/garden.jpg" className="card-img-top d-block mx-auto pt-3" alt="indoor garden" />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">Smart Plant Garden</h3>
                  <p className="card-text">Indoor hydroponic garden with automatic watering.</p>
                  <p className="card-text"><strong>Price:</strong> $179</p>
                  <p className="card-text"><small className="text-muted"><strong>Tags:</strong> Eco-friendly, Home</small></p>
                  <div className="mt-auto d-flex gap-2">
                    <a href="#" className="btn btn-dark">Shop</a>
                    <Link to="/library" className="btn btn-outline-dark">Save</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-md-6 col-xl-3 d-flex">
              <div className="card mb-4 w-100">
                <img src="/img/mug.jpg" className="card-img-top d-block mx-auto pt-3" alt="headphones" />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">Headphones</h3>
                  <p className="card-text">High-quality audio with active noise cancellation.</p>
                  <p className="card-text"><strong>Price:</strong> $249</p>
                  <p className="card-text"><small className="text-muted"><strong>Tags:</strong> Tech, Travel</small></p>
                  <div className="mt-auto d-flex gap-2">
                    <a href="#" className="btn btn-dark">Shop</a>
                    <Link to="/library" className="btn btn-outline-dark">Save</Link>
                  </div>
                </div>
              </div>
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
