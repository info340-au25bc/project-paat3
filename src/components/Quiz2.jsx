import { Link } from "react-router-dom"; // use Link for SPA routing
import { NavBar } from './NavBar';
import { Footer } from "./Footer";


export function Quiz2({ updateFilter, currentAnswers }) {

  const handleChange = (e) => {
    updateFilter('age', e.target.value);
  };

  // list options to make dynamic list
  const ageOptions = [
      "0-2 years (Infant/Toddler)", "3-5 years (Preschooler)", "6-12 years (Child)",
      "13-17 years (Teen)", "18-24 years (Young Adult)", "25-34 years (Adult)",
      "35-49 years (Middle-Aged Adult)", "50-64 years (Older Adult)", "65+ (Senior)"
  ];

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
        <div className="card col-12 col-md-6 mb-5">
            <div className="card-body">
              <h2 className="card-title ps-3 mt-3 mb-4">What's their age range?</h2>

              <div className="quiz-container">
                {ageOptions.map(age => (
                    <div key={age}>
                        <label className="ps-3">
                        <input 
                            type="radio" 
                            name="age" 
                            value={age}
                            checked={currentAnswers.age === age}
                            onChange={handleChange}
                        /> {age}
                        </label>
                        <br />
                    </div>
                ))}
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
