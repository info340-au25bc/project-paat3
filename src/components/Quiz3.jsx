import { Link } from "react-router-dom"; // use Link for SPA routing
import { NavBar } from './NavBar';
import { Footer } from "./Footer";


export function Quiz3() {
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
      <Footer />
    </div>
  );
}
