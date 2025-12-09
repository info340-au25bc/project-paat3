import React from 'react';

export const hobbies = [
    "Painting", "Running", "Reading", "Skiing", "Climbing", "Hiking",
    "Scrapbooking", "Journaling", "Photography", "Embroidery",
    "History", "Sports", "Design"
];

export const personality = [
    "Introverted", "Extroverted", "Adventurous", "Laidback", "Creative",
    "Eclectic", "Practical", "Minimalist", "Vintage", "Humorous",
    "Trendy", "Modern", "Sleek", "Sentimental", "Analytical", "Empathetic"
];

export const occasions = [
    "Birthday", "Christmas", "Valentine's Day", "Mother's Day", "Father's Day", 
    "Anniversary", "Work Celebration", "Baby Shower",
    "Halloween", "Thanksgiving", "Graduation", "New Year's",
    "Wedding/Engagement", "House Warming", "Retirement"
];

export const lifestyle = [
    "Student", "Homebody", "Outdoorsy", "Gardner/Plant Parent",
    "Chef/Foodie", "Music Lover", "Gamer", "Crafter/DIY'er",
    "Fitness/Health", "Sustainable/Eco-Friendly"
];

export function Category({ title, list, toggleFilter, selectedFilters }) {
    return (
        <div
            className="category"
            style={{
                marginBottom: "40px",
                padding: "15px",
                border: "1px solid #ccc", 
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
            }}>
            
            <h3 style={{ marginBottom: "10px" }}>{title}</h3>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // filters will wrap to next line if needed
                    gap: "10px",
                }}>
                
                {list.map((filter) => {
                    const isSelected = selectedFilters.includes(filter); //does the selectedFilters state array contain the filter alrdy?

                    return (
                        <button
                            key={filter} //each item has unique name, use it as the key
                            onClick={() => toggleFilter(filter)} //will change to black to mark as 'selected'
                            style={{
                                backgroundColor: isSelected ? "black" : "white",
                                color: isSelected ? "white" : "black",
                                border: "1px solid black",
                                padding: "8px 12px",
                                borderRadius: "8px",
                                cursor: "pointer",
                            }}>
                            {filter} </button> //{filter} = name of the filter IS the button
                    );
                })}
            </div>
        </div>
    );
}
