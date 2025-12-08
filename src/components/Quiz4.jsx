import { Link } from "react-router-dom"; // use Link for SPA routing
import { NavBar } from './NavBar';
import { Footer } from "./Footer";
import { useState } from "react";


export function Quiz4({ updateFilter, currentAnswers }) {
  
  // local state for the budget input before they "set"
  const [tempBudget, setTempBudget] = useState(currentAnswers.maxBudget || "");
  const occasionsList = [
    "Birthday", "New Year", "Christmas", "Halloween", "Thanksgiving",
    "Father's Day", "Mother's Day", "Valentine's Day", "Wedding/Anniversary",
    "Engagement", "Graduation", "Retirement", "Thank You", "Just Because!", "Other"
  ];

  const handleOccasionClick = (occasion) => {
    // if they click the same one again, then unselect it otherwise set as new occasion
    if (currentAnswers.occasion === occasion) {
      updateFilter('occasion', ""); 
    } else {
      updateFilter('occasion', occasion);
    }
  };

  // set cost to whatever user inputs
  const handleBudgetChange = (e) => {
    setTempBudget(e.target.value);
  };
  // set budget to what user inputted and display it
  const saveBudget = () => {
    if (tempBudget) {
      updateFilter('maxBudget', Number(tempBudget));
      alert(`Budget set to $${tempBudget}`);
    }
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
          <p>Step 4 of 4</p>
          <div className="progress-bar"></div>
        </div>
      </div>

      {/* Quiz Card */}
      <main>
        <div className="d-flex justify-content-center align-items-center">
        <div className="card col-12 col-md-6 mb-5">
            <h2 className="card-title ps-3 mt-3 mb-4">What's the Occasion?</h2>
            <div className="card-body">
              <div className="quiz-container">
                <div className="occassion-container" style={{ marginTop: "30px" }}>
                 {/* Dynamically create buttons */}
                 {occasionsList.map((item) => {
                    const isSelected = currentAnswers.occasion === item;
                    return (
                      <div 
                        key={item} 
                        className="occassion"
                        onClick={() => handleOccasionClick(item)}
                        style={{ 
                          // if selected then turn dark green otherwise set to white
                          backgroundColor: isSelected ? "#344E41" : "white",
                          // if selected then set to white otherwise default to black
                          color: isSelected ? "white" : "black",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        {item}
                      </div>
                    );
                  })}
                  
                </div>
              </div>

              <div className="AllBudgetComponents" style={{marginTop: "40px"}}>
                <h3 className="text-center">What is your budget?</h3>
                
                {/* Visual slider placeholder */}
                <div className="budgetToHide">
                  <div className="barAndToggler">
                    <div className="budget-bar"></div>
                    <div className="budget-toggler" style={{marginLeft: "50%"}}></div>
                  </div>
                  <div className="budget-toggling">
                    <p className="min" style={{ fontSize: "large", paddingLeft: "40px" }}>$10</p>
                    <p className="max" style={{ fontSize: "large", paddingRight: "40px" }}>$500+</p>
                  </div>
                </div>

                {/* Input Form */}
                <div className="budget-input-form" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                  <input
                    type="number"
                    id="max-budget"
                    placeholder="Enter Max Budget ($)"
                    min="10"
                    className="budget-input"
                    value={tempBudget}
                    onChange={handleBudgetChange}
                    style={{ padding: "5px" }}
                  />
                  <button onClick={saveBudget} className="budget-submit-btn button" style={{fontSize: "16px"}}>
                    Set
                  </button>
                </div>
                <p className="text-center mt-2">Current Max Budget: <strong>${currentAnswers.maxBudget}</strong></p>
              </div>

              <div className="FindGiftButton" style={{marginTop: "30px"}}>
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
