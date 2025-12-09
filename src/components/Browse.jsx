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
              