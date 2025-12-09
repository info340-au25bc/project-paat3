import { Link } from "react-router-dom";
import { NavBar } from './NavBar';
import { Footer } from "./Footer";
import { gifts as allGifts } from './GiftDatabase';
import { GiftCard } from './GiftCardComponent';

export function Results({ savedGifts, savingGiftToggle, quizFilters }) {
    
    // if a gift matches ANY of the user's choices, we show it.
    const filteredGifts = allGifts.filter(gift => {
        // check if user checked anything
        // show ALL gifts if filters are empty so the page isn't blank
        const hasRecipient = quizFilters.recipient !== "";
        const hasOccasion = quizFilters.occasion !== "";
        const hasAge = quizFilters.age !== "";
        const hasPersonality = quizFilters.personality.length > 0;
        if (!hasRecipient && !hasOccasion && !hasAge && !hasPersonality) {
            return true; // no filters set? show everything
        }
        // calculate matches
        const giftTags = gift.tags.split(', ');
        let matchCount = 0;
        
        // check if gift tags include the recipient string (for ex. "Friend")
        if (hasRecipient) {
            if (giftTags.filter(tag => quizFilters.recipient.includes(tag)).length > 0) {
                matchCount = matchCount + 1;
            }
        }
        // occasion Match
        if (hasOccasion) {
            if (giftTags.filter(tag => quizFilters.occasion.includes(tag)).length > 0) {matchCount = matchCount + 1;}
        }
        // age Match
        if (hasAge) {
            if (giftTags.filter(tag => quizFilters.age.includes(tag)).length > 0) {
                matchCount = matchCount + 1;
            }
        }
        // personality match
        if (hasPersonality) {
            // check if any of the chosen traits exist in the gift tags
            const matchingTraits = quizFilters.personality.filter(trait => 
                gift.tags.includes(trait)
            );
            if (matchingTraits.length > 0) {
                matchCount = matchCount + 1;
            }
        }
        // if the gift matched AT LEAST ONE criteria, we keep it.
        return matchCount > 0;
    });
    // create a dynamic list of what the user selected
    const preferencesList = [quizFilters.recipient, quizFilters.age, quizFilters.occasion, ...quizFilters.personality // spread the array into individual items
    ];
    // filter out empty strings and join them with commas
    const preferencesString = preferencesList.filter(item => item && item !== "").join(", ");

    return (
        <div>
            <NavBar />

            <header className="container-fluid text-white py-5">
                <h1 style={{ fontSize: "50px" }}>Your Gift Recommendation</h1>
            </header>

            <main>
                <div>
                    <h2 className="Title">Top Recommendations</h2>
                    {/* display quiz results dynamically */}
                    <p className="quiz-description">
                        Based on your preferences: {preferencesString || "Any"} </p>
                </div>
                {/* add in the GIFTLIST component */}
                <div className="container">
                    <div className="container">
                        <div className="row justify-content-center">
                       {/* check if we have any matches */}
                       {filteredGifts.length > 0 ? (
                                // if yes then map filtered list
                                filteredGifts.map(gift => {
                                    // filter saved list for this id, and see if we found anything
                                    const isSaved = savedGifts.filter(g => g.id === gift.id).length > 0;
                                    return (<GiftCard key={gift.id} gift={gift} savingGiftToggle={savingGiftToggle} isSaved={isSaved}/>
                                    );
                                })
                            ) : ( // else then we display no gifts
                                <div className="text-center mt-5">
                                    <h3>No gifts found!</h3>
                                    <p>Try selecting fewer personality traits.</p>
                                </div>)}
                        </div>
                    </div>
                </div>

                {/* Bottom buttons */}
                <div
                    className="text-center mt-4 buttonContainer"
                    style={{ justifyContent: "center", gap: "20px", marginBottom: "50px" }}
                >
                    <Link to="/quiz1" className="buttonBack">Take Quiz Again</Link>
                    <Link to="/browse" className="button">Browse Categories</Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
