import { Link } from "react-router-dom"; // use Link for SPA routing
import { NavBar } from './NavBar';
import { Footer } from "./Footer";

export function Quiz1() {
  return (
    <div>
     <NavBar />

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
      <Footer />
    </div>
  );
}