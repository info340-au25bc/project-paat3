import { Link } from "react-router-dom"; // use Link for SPA routing
import { NavBar } from './NavBar';
import { Footer } from "./Footer";


export function Quiz2() {
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
        <p className="quiz-description">
          Fill out this quiz and our compass will lead you to the perfect gifts!
        </p>
      </div>

      {/* Progress bar */}
      <div className="container">
        <div className="progress-step">
          <p>Step 2 of 4</p>
          <div className="progress-bar"></div>
        </div>
      </div>

      {/* Quiz card */}
      <main>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card w-50 mb-5">
            <div className="card-body">
              <h2 className="card-title ps-3 mt-3 mb-4">What's their age range?</h2>

              <div className="quiz-container">
                <label className="ps-3">
                  <input type="radio" name="option" value="0-2 years (Infant)" /> 0-2 years (Infant/Toddler)
                </label>
                <br />
                <label className="ps-3">
                  <input type="radio" name="option" value="3-5 years (Preschooler)" /> 3-5 years (Preschoolers)
                </label>
                <br />
                <label className="ps-3">
                  <input type="radio" name="option" value="6-12 years (Child/Tween)" /> 6-12 years (Child)
                </label>
                <br />
                <label className="ps-3">
                  <input type="radio" name="option" value="13-17 years (Young Teen)" /> 13-17 years
                </label>
                <br />
                <label className="ps-3">
                  <input type="radio" name="option" value="18-24 years (Young Adult)" /> 18-24 years (Young Adult)
                </label>
                <br />
                <label className="ps-3">
                  <input type="radio" name="option" value="25-34 years (Adult)" /> 25-34 years (Adult)
                </label>
                <br />
                <label className="ps-3">
                  <input type="radio" name="option" value="35-49 years (Middle-Aged Adult)" /> 35-49 years (Middle-Aged Adult)
                </label>
                <br />
                <label className="ps-3">
                  <input type="radio" name="option" value="50-64 years (Older Adult)" /> 50-64 years (Older Adult)
                </label>
                <br />
                <label className="ps-3">
                  <input type="radio" name="option" value="65+ (Senior)" /> 65+ (Senior)
                </label>
              </div>
            </div>

            <div className="buttonContainer">
              <Link to="/quiz1" className="buttonBack">Back</Link>
              <Link to="/quiz3" className="button">Next</Link>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
