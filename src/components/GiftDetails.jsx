import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { gifts } from './GiftDatabase';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export function GiftDetails({ savedGifts, savingGiftToggle }) {
    // get the ID from the URL and convert to a number that we can use
    const { id } = useParams();
    const idNumber = Number(id);
    // create a list of matches (which will only have 1 item) then grab first item
    const matchingGifts = gifts.filter(g => g.id === idNumber);
    const gift = matchingGifts[0];
    // in case no gift is found
    if (!gift) {
        return (
            <div className="text-center mt-5">
                <h2>Gift not found!</h2>
                <Link to="/browse">Go Back</Link>
            </div>
        );
    }
    // check if saved if list of matches is not emptpy, then it is saved
    const isSaved = savedGifts.filter(g => g.id === gift.id).length > 0;
    // button styling
    let buttonClass = "btn btn-outline-dark btn-lg";
    let buttonText = "Save to Library";
    if (isSaved) {buttonClass = "btn btn-dark btn-lg"; buttonText = "Saved to Library";}
    return (
        <div>
            <NavBar />
            <main className="container mt-5">
                <div className="row">
                    {/* image column */}
                    <div className="col-md-6 mb-4">
                        <img src={gift.img} alt={gift.name} className="img-fluid rounded shadow" style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}/>
                    </div>
                    {/* details column */}
                    <div className="col-md-6">
                        <h1 className="display-4">{gift.name}</h1>
                        <h3 className="text-muted mb-4">${gift.price}</h3>
                        <p className="lead">{gift.description}</p>
                        <div className="mb-4">
                            <strong>Tags:</strong>
                            <p className="text-muted">{gift.tags}</p>
                        </div>
                        {/* buttons */}
                        <div className="d-flex gap-3">
                            <button className={buttonClass} onClick={() => savingGiftToggle(gift)}>{buttonText}</button>
                            <Link to="/browse" className="btn btn-lg btn-primary">
                                Back to Browse
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}