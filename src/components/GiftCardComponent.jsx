// gift = object
//savingGiftToggle = function
//isSaved = boolean

import { Link } from "react-router-dom";

export function GiftCard({ gift, savingGiftToggle, isSaved }) {
    return (
        <div className="col-12 col-md-6 col-xl-3 d-flex">
            <div className="card mb-4 w-100">
            {/* making image of the gift clickable */}
            <Link to={`/gift/${gift.id}`}>
                <img src={gift.img} className="card-img-top d-block mx-auto pt-3" alt={gift.name} />
                </Link>
                <div className="card-body d-flex flex-column">
                    {/* making title of the gift clickable */}
                <Link to={`/gift/${gift.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                        <h3 className="card-title">{gift.name}</h3>
                    </Link>
                    <p className="card-text">{gift.description}</p>
                    <p className="card-text"><strong>Price:</strong> ${gift.price}</p>
                    <p className="card-text">
                            <strong>Tags:</strong> {gift.tags}
                    </p>

                    <div className="mt-auto d-flex gap-2">
                        {/* if item is saved then it will turn the button dark */}
                        <button
                            className={'btn ' + (isSaved ? 'btn-dark' : 'btn-outline-dark')}
                            onClick={() => savingGiftToggle(gift)}> 
                            {/* execute savingGiftToggle function when button is clicked */}
                            {/* remember: savingGiftToggle function takes in a gift object, which is alrdy a prop for this GiftCard function */}
                            
                            {isSaved ? "Saved" : "Save"} 
                            {/* change the display of the button */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}