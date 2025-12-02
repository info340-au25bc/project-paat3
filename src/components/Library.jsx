import { NavBar } from './NavBar';
import { Footer } from "./Footer";
import { GiftCard } from './GiftCardComponent';


export function Library({ savedGifts, savingGiftToggle }) {
    const pageHasContent = () => {
        if (savedGifts.length == 0) {
            return <p style={{textAlign:"center"}}>No saved gifts yet!</p>
        } else {
            return savedGifts.map(gift => <GiftCard key={gift.id} gift={gift} savingGiftToggle={savingGiftToggle} isSaved={true} />); // item always saved if appears here as true
        }
    }

   return (
        <div>
           <NavBar />

            <header className="container-fluid text-white py-5">
                <h1 style={{ fontSize: "50px" }}>My Gift Library</h1>
            </header>

            <main>
                <div className="container text-center">
                    <h2 className="mb-4">Your Saved Gifts</h2>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                           {pageHasContent ()}
                           {/* use () because we want to call the func and execute it for its returns, not just ref it.  */}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}