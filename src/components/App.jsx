import React, { useState, useEffect } from 'react'; //import React Component
import toast, { Toaster } from 'react-hot-toast'; //import third party react component

// firebase imports
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref, onValue, set, remove } from 'firebase/database';
import { auth, db } from '../firebase-config';
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
      // user State to track who's logged in
      const [currentUser, setCurrentUser] = useState(null);
      const [authLoading, setAuthLoading] = useState(true); 

      // data states
      const [savedGifts, setSavedGifts] = useState([]); // initial state is empty array
      const [browseFilters, setBrowseFilters] = useState([]); // initial state for browse filters

      const [quizFilters, setQuizFilters] = useState({ 
            recipient: "",
            age: "",
            personality: [], // array bc they can pick multiple
            occasion: "",
      });

      // keep track of authentication 
      // runs ONCE when the app loads to check if the user is already logged in
      useEffect(() => {const unsubscribe = onAuthStateChanged(auth, (user) => {setCurrentUser(user); setAuthLoading(false); // we know who the user is now
            });
            return unsubscribe; // cleanup listener
      }, []);

      // listen for changes in database
      // runs whenever 'currentUser' changes.
      useEffect(() => {
            if (currentUser) {
                  // path: users/UID/savedGifts
                  const giftsRef = ref(db, 'users/' + currentUser.uid + '/savedGifts');
                  
                  // listen for changes (data binding)
                  const unsubscribe = onValue(giftsRef, (snapshot) => {const data = snapshot.val();
                        if (data) {
                              // convert Object back to array so our app can use it like before
                              const giftsArray = Object.keys(data).map(key => data[key]);
                              setSavedGifts(giftsArray);
                        } else {setSavedGifts([]); // no data found
                        }
                  });
                  return unsubscribe; // cleanup listener
            } else {
                  setSavedGifts([]); // clear gifts if logged out
            }
      }, [currentUser]);

      // helper function to update specific quiz answer
      function updateQuizFilter(category, value) {
            setQuizFilters(prev => ({
                ...prev,
                [category]: value}));
      }

      function savingGiftToggle(gift) { 
            // check if user is logged in first
            if (!currentUser) {
                  toast.error("Please log in to save gifts!", { icon: '🔒' }, "(Click the Compass icon in the Navigation Bar!)");
                  return;}

            // find if that current gift is already saved 
            const isAlreadySaved = savedGifts.some(currentGift => currentGift.id === gift.id);
            // path to this specific gift in the DB: users/UID/savedGifts/GIFT_ID
            const giftRef = ref(db, 'users/' + currentUser.uid + '/savedGifts/' + gift.id);

            if(isAlreadySaved) { 
                  // if the gift is already saved, remove it from firebase
                  remove(giftRef)
                        .then(() => {toast.error("Removed from Library", {icon: '🗑️', style: { borderRadius: '10px', background: '#333', color: '#fff' },});
                        })
                        .catch(err => toast.error("Error removing: " + err.message));
            } else {
                  // else save it to firebase
                  set(giftRef, gift)
                        .then(() => {toast.success("Saved to Library!", {style: { borderRadius: '10px', background: '#333', color: '#fff' },});
                        })
                        .catch(err => toast.error("Error saving: " + err.message));
            }
      }

      // don't render routes until we know if user is logged in
      if (authLoading) return <div className="text-center mt-5">Loading...</div>;

      return (
            <div>
                  <Toaster position="top-center" reverseOrder={false} />

                  <Routes>
                        {/* pass currentUser so pages know if they should redirect */}
                        <Route path="login" element={<Login currentUser={currentUser} />} />
                        <Route path="signup" element={<Signup currentUser={currentUser} />} />
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