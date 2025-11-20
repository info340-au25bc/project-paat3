import React from 'react';

export function GiftCard({ gift, onSave, isSaved }) {
    return (
        <div className="col-12 col-md-6 col-xl-3 d-flex">
            <div className="card mb-4 w-100">
                <img src={gift.img} className="card-img-top d-block mx-auto pt-3" alt={gift.name} />
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{gift.name}</h3>
                    <p className="card-text">{gift.description}</p>
                    <p className="card-text"><strong>Price:</strong> ${gift.price}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            <strong>Tags:</strong> {gift.tags}
                        </small>
                    </p>

                    <div className="mt-auto d-flex gap-2">
                        <a href="#" className="btn btn-dark">Shop</a>

                        {/* if item is saved then it will turn the button dark */}
                        <button
                            className={`btn ${isSaved ? 'btn-dark' : 'btn-outline-dark'}`}
                            onClick={() => onSave(gift)}
                        >
                            {isSaved ? "Saved" : "Save"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}