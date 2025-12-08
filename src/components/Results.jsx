import { Link } from "react-router-dom";
import { NavBar } from './NavBar';
import { Footer } from "./Footer";
import { gifts as allGifts } from './GiftDatabase';
import { GiftCard } from './GiftCardComponent';

export function Results({ savedGifts, savingGiftToggle, quizFilters }) {
    const filteredGifts = allGifts.filter(gift => {
        // filter by budget
        if (gift.price > quizFilters.maxBudget) return false;
        // 2. filter by personality (tags), if selected gift should match AT LEAST one
        if (quizFilters.personality.length > 0) {
            // check if list of matching tags has more than 0 items
            const matchesPersonality = quizFilters.personality.filter(trait => 
                gift.tags.includes(trait)
            ).length > 0;
            if (!matchesPersonality) return false;
        }
        return true; // keep gift if passes checks
    });

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
                    Based on your preferences: {quizFilters.recipient}, {quizFilters.occasion} (${quizFilters.maxBudget})</p>
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
                                    <p>Try increasing your budget or selecting fewer personality traits.</p>
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
