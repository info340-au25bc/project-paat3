// gift = object
//savingGiftToggle = function
//isSaved = boolean

export function GiftCard({ gift, savingGiftToggle, isSaved }) {
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