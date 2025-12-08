import { NavBar } from './NavBar';
import { Link } from "react-router";
import { Category } from './FilterChoices';
import { hobbies, personality, occasions, lifestyle } from "./FilterChoices";
import { Footer } from './Footer';
import { useState } from 'react';



export function Browse({ setGlobalFilters }) {

    //start with initial empty array of filters chosen
    const [selectedFilters, setSelectedFilters] = useState([]);
    
    function toggleFilter(filter) {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter(f => f !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    }

    return (
        <div>
            <NavBar />

            <header className="container-fluid text-white py-5">
                <h1 style={{ fontSize: "50px" }}> Gift Finder Quiz </h1>
            </header>

            <div>
                <h2 className="Title"> Browse for Gifts </h2>
                <p className="browse-description"> Browse our curated gift collection, who knows, you might stumble upon that
                    perfect gift! </p>
            </div>

            <main>
                {/* search button, easier to route to BrowseResults.jsx */}
                <div className="searchButton" style={{ textAlign: "center", marginBottom: "50px" }}>
                    <p>Choose some filters for your gift and then click 'Search!'</p>
                    {/* pass selectedFilters to browseResults too */}
                    <Link 
                        to="/browseResults" className="button" onClick={() => setGlobalFilters(selectedFilters)}>Search!
                    </Link>
                </div>

                {/* FILTERS SECTION */}
                <div className="mainbox">
                    <Category title="Hobbies & Interests" list={hobbies} toggleFilter={toggleFilter} selectedFilters={selectedFilters} />
                    <Category title="Personality Types" list={personality} toggleFilter={toggleFilter} selectedFilters={selectedFilters} />
                    <Category title="Occasions" list={occasions} toggleFilter={toggleFilter} selectedFilters={selectedFilters} />
                    <Category title="Lifestyle" list={lifestyle} toggleFilter={toggleFilter} selectedFilters={selectedFilters} />
                </div>

</main>

           <Footer />
        </div>
    )
}
                {/* <h2> Popular Collections </h2>
                <p className="browse-description">Take a look through some popular categories!</p>
                <div className="popCollection">
                    <div className="collection">Trending Now
                        <p className="collection-text">Shop the most popular and viral gifts gaining major buzz this season.</p>
                    </div>
                    <div className="collection">Gifts on a Budget
                        <p className="collection-text">Explore our curated selection of gifts under a set price, perfect for smart
                            shoppers.</p>
                    </div>
                    <div className="collection">Last Minute Gifts
                        <p className="collection-text">Find quick, but thoughtul gifts that works for anyone, available with
                            expedited delivery options!</p>
                    </div>
                    <div className="collection">Eco-Friendly Gifts
                        <p className="collection-text">Discover sustainable, ethically made, and zero-waste items that are kind to
                            the planet!</p>
                    </div>
                    <div className="collection">Splurge Worthy
                        <p className="collection-text">Indulge them with premium gifts that are truly unforgettable.</p>
                    </div>
                    <div className="collection">Support Small
                        <p className="collection-text">Shop handmade goods and special items from independent and local artisans.
                        </p>
                    </div>
                </div> */}
            