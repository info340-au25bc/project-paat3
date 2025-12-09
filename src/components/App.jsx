import React from 'react'; //import React Component
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; //import third party react component

import { Login } from './Login';
import { Signup } from './Signup';
import { Browse } from "./Browse";
import { Index } from "./Index";
import { Library } from './Library';
import { Quiz1 } from './Quiz1';
import { Quiz2 } from './Quiz2';
import { Quiz3 } from './Quiz3';
import { Quiz4 } from './Quiz4';
import { Results } from './Results';
import { BrowseResults } from './BrowseResults';
import { GiftDetails } from './GiftDetails.jsx';
import { Routes, Route } from 'react-router-dom';

function App(props) {
      const [savedGifts, setSavedGifts] = useState([]); //initial state is empty array
      const [browseFilters, setBrowseFilters] = useState([]); // initial state for browse filters
      const [quizFilters, setQuizFilters] = useState({ 
            recipient: "",
            age: "",
            personality: [], // array bc they can pick multiple
            occasion: "",
        });
        // helper function to update specific quiz answer
        function updateQuizFilter(category, value) {
            setQuizFilters(prev => ({
                ...prev,
                [category]: value
            }));
        }

      function savingGiftToggle(gift) { 
            //look at the current savedGifts array
            setSavedGifts(savedGifts => {
                  //1. find if that current gift is already saved 
                  const isAlreadySaved = savedGifts.some(currentGift => currentGift.id == gift.id); //check if the savedGifts array already has the gift in question
                  if(isAlreadySaved) { //if the gift is already saved, remove it
                        // trigger "removed" Toast
                        toast.error("Removed from Library", {icon: '🗑️', style: {borderRadius: '10px', background: '#333', color: '#fff',},
                          });
                        return savedGifts.filter(currentGift => currentGift.id !== gift.id); //go thru savedGifts array and filter for that gift, removing it
                        // trigger "saved" Toast
                  } else { toast.success("Saved to Library!", {style: {borderRadius: '10px', background: '#333', color: '#fff',},
                    });
                        return [...savedGifts, gift]; //else return the current array, with the added gift to save it
                  }
            });
      }

      return (
            <div>
                  <Toaster position="top-center" reverseOrder={false} />
                  <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="*" element={<Index />} />
                        <Route path="index" element={<Index />} />
                        <Route path="library" element={<Library savedGifts={savedGifts} savingGiftToggle={savingGiftToggle} />} />
                        <Route path="quiz1" element={<Quiz1 updateFilter={updateQuizFilter} currentAnswers={quizFilters} />} />
                        <Route path="quiz2" element={<Quiz2 updateFilter={updateQuizFilter} currentAnswers={quizFilters} />} />
                        <Route path="quiz3" element={<Quiz3 updateFilter={updateQuizFilter} currentAnswers={quizFilters} />} />
                        <Route path="quiz4" element={<Quiz4 updateFilter={updateQuizFilter} currentAnswers={quizFilters} />} />
                        <Route path="results" element={<Results savedGifts={savedGifts} savingGiftToggle={savingGiftToggle} quizFilters={quizFilters} />} />
                        <Route path="browse" element={<Browse setGlobalFilters={setBrowseFilters} />} />
                        <Route path="browseResults" element={<BrowseResults filters={browseFilters} savedGifts={savedGifts} savingGiftToggle={savingGiftToggle}/>} />
                        <Route path="gift/:id" element={<GiftDetails savedGifts={savedGifts} savingGiftToggle={savingGiftToggle} />} />
                  </Routes>
            </div>
      );
}

export default App;













































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
