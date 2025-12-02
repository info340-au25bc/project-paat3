import { Link } from "react-router-dom"; // use Link for SPA routing
import { NavBar } from './NavBar';
import { Footer } from "./Footer";


export function Quiz4() {
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
          <p>Step 4 of 4</p>
          <div className="progress-bar"></div>
        </div>
      </div>

      {/* Quiz Card */}
      <main>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card w-50 mb-5">
            <h2 className="card-title ps-3 mt-3 mb-4">What's the Occasion?</h2>
            <div className="card-body">
              <div className="quiz-container">
                <div className="occassion-container" style={{ marginTop: "30px" }}>
                  <div className="occassion">Birthday</div>
                  <div className="occassion">New Year</div>
                  <div className="occassion">Christmas</div>
                  <div className="occassion">Halloween</div>
                  <div className="occassion">Thanksgiving</div>
                  <div className="occassion">Father's Day</div>
                  <div className="occassion">Mother's Day</div>
                  <div className="occassion">Valentine's Day</div>
                  <div className="occassion">Wedding/Anniversary</div>
                  <div className="occassion">Engagement</div>
                  <div className="occassion">Graduation</div>
                  <div className="occassion">Retirement</div>
                  <div className="occassion">Thank You</div>
                  <div className="occassion">Just Because!</div>
                  <div className="occassion">Other</div>
                </div>
              </div>

              <div className="AllBudgetComponents">
                <div className="budgetToHide">
                  {/* just the bar and toggler */}
                  <div className="barAndToggler">
                    <div className="budget-bar"></div>
                    <div className="budget-toggler"></div>
                  </div>

                  {/* only the min/max numbers */}
                  <div className="budget-toggling">
                    <p className="min" style={{ fontSize: "large", paddingLeft: "40px" }}>$10</p>
                    <p className="max" style={{ fontSize: "large", paddingRight: "40px" }}>$500+</p>
                  </div>
                </div>

                {/* only input form */}
                <div className="budget-input-form">
                  <input
                    type="number"
                    id="max-budget"
                    placeholder="Enter Max Budget ($)"
                    min="10"
                    className="budget-input"
                  />
                  <button className="budget-submit-btn button">Set Budget</button>
                </div>
              </div>

              {/* Find Gift Button */}
              <div className="FindGiftButton">
                <Link to="/results" className="button" style={{ fontSize: "30px" }}>Find My Gifts!</Link>
              </div>
            </div>

            <div className="quiz4Button">
              <Link to="/quiz3" className="buttonBack">Back</Link>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
