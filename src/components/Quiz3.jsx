import { Link } from "react-router-dom"; // use Link for SPA routing
import { NavBar } from './NavBar';
import { Footer } from "./Footer";


export function Quiz3({ updateFilter, currentAnswers }) {
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    // copy current list of personalities
    let updatedList = [...currentAnswers.personality];
    if (isChecked) {
      updatedList.push(value); // if checked then we add
    } else {
      updatedList = updatedList.filter(item => item !== value); // remove if unchecked
    }
    updateFilter('personality', updatedList); 
  };

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
          <div className="card quiz-card mb-5">
            <div className="card-body">
              <h2 className="card-title ps-3 mt-3 mb-4">How would you describe their personality?</h2>
              <p style={{ paddingLeft: "20px", marginBottom: "10px" }}>Select all that apply:</p>

              <div className="quiz3-container">
                {/* map available options */}
                {["Adventurous", "Practical", "Sophisticated", "Humorous", "Organized",
                  "Intellectual", "Laidback", "Minimalist", "Creative", "Sentimental",
                  "Trendy", "Introverted", "Extroverted", "Health Conscious"].map(trait => (
                    <label key={trait} style={{ gap: "10px" }}>
                      <input
                        type="checkbox"
                        style={{ borderRadius: "10px" }}
                        value={trait}
                        // checks if selected
                        checked={currentAnswers.personality.includes(trait)}
                        // attach handler
                        onChange={handleCheckboxChange}
                      />
                      {trait}
                    </label>

                  ))}
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
