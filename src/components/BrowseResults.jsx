import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { gifts as allGifts } from "./GiftDatabase";
import { GiftCard } from "./GiftCardComponent";

export function BrowseResults({ filters, savedGifts, savingGiftToggle }) {
    const filteredGifts = allGifts.filter(gift => {
        // if nothing selected, then just show everything
        if (filters.length === 0) return true;
        
    
        // create a list of filters that this gift actually has
        const matchingFilters = filters.filter(f => gift.tags.includes(f));
        // if that list is not empty, it's a match
        return matchingFilters.length > 0;
    });

    return (
        <div>
            <NavBar />

            <header className="container-fluid text-white py-5">
                <h1 style={{ fontSize: "50px" }}>Search Results</h1>
            </header>

            <main>
                <div className="text-center mb-5">
                    <h2 className="Title">You searched for:</h2>
                    <p className="browse-description">
                        {/* display what they clicked, ALL if empty */}
                        {filters.length > 0 ? filters.join(", ") : "All Gifts"}
                    </p>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {filteredGifts.length > 0 ? (
                            filteredGifts.map(gift => {
                                // filter the list to see if we find a match
                                const matchingSavedGifts = savedGifts.filter(g => g.id === gift.id);
                                // if the list is not empty, then it is saved
                                const isSaved = matchingSavedGifts.length > 0;
                                return (
                                    <GiftCard
                                        key={gift.id}
                                        gift={gift}
                                        isSaved={isSaved}
                                        savingGiftToggle={savingGiftToggle}
                                    />
                                );
                            })
                        ) : (
                            <div className="text-center">
                                <h3>No matches found.</h3>
                                <p>Try selecting different filters.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-center mt-5 mb-5">
                    <Link to="/browse" className="buttonBack">Back to Filters</Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}