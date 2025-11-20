import React from 'react';

export function GiftCard({ gift, savingGift }) {
    return (
        <div className="col-12 col-md-6 col-xl-3 d-flex">
            <div className="card mb-4 w-100">
                <img src={gift.img} className="card-img-top d-block mx-auto pt-3" alt={gift.name} />
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{gift.name}</h3>
                    <p className="card-text">{gift.description}</p>
                    <p className="card-text"><strong>Price:</strong> ${gift.price}</p>
                    <p className="card-text">
                        <p>
                            <strong>Tags:</strong> {gift.tags}
                        </p>
                    </p>

                    <div className="mt-auto d-flex gap-2">
                        <a href="#" className="btn btn-dark">Shop</a>

                        <button
                            className="btn btn-outline-dark"
                            onClick={() => savingGift(gift)}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}