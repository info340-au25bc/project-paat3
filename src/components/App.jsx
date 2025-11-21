import React from 'react'; //import React Component
import { useState } from 'react';

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
import { Routes, Route } from 'react-router-dom';

function App(props) {
      const [savedGifts, setSavedGifts] = useState([]); //initial state is empty array

      function savingGiftToggle(gift) { 
            //look at the current savedGifts array
            setSavedGifts(savedGifts => {
                  //1. find if that current gift is already saved 
                  const isAlreadySaved = savedGifts.some(currentGift => currentGift.id == gift.id); //check if the savedGifts array already has the gift in question

                  if(isAlreadySaved) { //if the gift is already saved, remove it
                        return savedGifts.filter(currentGift => currentGift.id !== gift.id); //go thru savedGifts array and filter for that gift, removing it
                  } else {
                        return [...savedGifts, gift]; //else return the current array, with the added gift to save it
                  }
            });
      }

      return (
            <div>
                  <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="*" element={<Index />} />
                        <Route path="index" element={<Index />} />
                        <Route path="browse" element={<Browse />} />
                        <Route path="library" element={<Library savedGifts={savedGifts} savingGiftToggle={savingGiftToggle} />} />
                        <Route path="quiz1" element={<Quiz1 />} />
                        <Route path="quiz2" element={<Quiz2 />} />
                        <Route path="quiz3" element={<Quiz3 />} />
                        <Route path="quiz4" element={<Quiz4 />} />
                        <Route path="results" element={<Results savedGifts={savedGifts} savingGiftToggle={savingGiftToggle} />} />
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
