import React from 'react';
import { Link } from 'react-router';

export function Library(props) {
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
          <img src="img/compass.jpg" alt="compass" width="60" height="60" />
        </div>

        <div className="nav-right" style={{ marginRight: "30px" }}>
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
          <p className="browse-description">
            Here are the gift ideas you've saved for your friends and family.
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center">

            {/* Card 1 */}
            <div className="col-12 col-md-6 col-xl-3 d-flex">
              <div className="card mb-4 w-100">
                <img src="img/radio.png" className="card-img-top d-block mx-auto pt-3" alt="retro bluetooth speaker" />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">Retro bluetooth speaker</h3>
                  <p className="card-text">A vintage-style speaker with modern tech for the music lover.</p>
                  <p className="card-text"><small className="text-muted"><strong>For:</strong> Dad</small></p>
                  <p className="card-text"><small className="text-muted"><strong>Tags:</strong> Music, Vintage, Tech</small></p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-dark">Shop</a>
                    <a href="#" className="btn btn-outline-danger">Remove</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6 col-xl-3 d-flex">
              <div className="card mb-4 w-100">
                <img src="img/mug.jpg" className="card-img-top d-block mx-auto pt-3" alt="smart mug" />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">Temperature control smart mug</h4>
                  <p className="card-text">Keeps coffee at the perfect temperature for hours. Great for a colleague!</p>
                  <p className="card-text"><small className="text-muted"><strong>For:</strong> Sarah (Work)</small></p>
                  <p className="card-text"><small className="text-muted"><strong>Tags:</strong> Tech, Practical, Office</small></p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-dark">Shop</a>
                    <a href="#" className="btn btn-outline-danger">Remove</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-xl-3 d-flex">
              <div className="card mb-4 w-100">
                <img src="img/garden.jpg" className="card-img-top d-block mx-auto pt-3" alt="indoor herb garden" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Indoor herb garden kit</h5>
                  <p className="card-text">A self-watering indoor planter for fresh herbs all year round.</p>
                  <p className="card-text"><small className="text-muted"><strong>For:</strong> Mom</small></p>
                  <p className="card-text"><small className="text-muted"><strong>Tags:</strong> Gardening, Eco-friendly, Home</small></p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-dark">Shop</a>
                    <a href="#" className="btn btn-outline-danger">Remove</a>
                  </div>
                </div>
              </div>
            </div>

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
