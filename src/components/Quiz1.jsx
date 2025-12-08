import { Link } from "react-router-dom"; // use Link for SPA routing
import { NavBar } from './NavBar';
import { Footer } from "./Footer";

export function Quiz1({ updateFilter, currentAnswers }) {

  // helper function so we dont have to make multiple individual versions of this
  // turns click into action that we want (save the recipient we click)
  const handleChange = (e) => {
    updateFilter('recipient', e.target.value);
  };

  return (
    <div>
      <NavBar />

      {/* QUIZ HEADER */}
      <header className="container-fluid text-white py-5">
        <h1 className="quiz-title">Gift Finder Quiz</h1>
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
          <div className="card quiz-card mb-5">
            <div className="card-body">
              <h2 className="card-title ps-3 mt-3 mb-4">Who is the recipient to you?</h2>

              {/* map options and make it easier to make new categories if needed */}
              {["Friend", "Family Member", "Romantic Partner", "Colleague", "Acquaintance", "Other"].map(role => (
                <div key={role}>
                  <label className="ps-3">
                    <input
                      type="radio"
                      name="recipient"
                      value={role}
                      // check if saved
                      checked={currentAnswers.recipient === role}
                      // react to the click (actually save it)
                      onChange={handleChange}
                    /> {role}
                  </label><br />
                </div>
              ))}

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