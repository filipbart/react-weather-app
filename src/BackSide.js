import React from 'react';
import CitiesList from "./CitiesList";

export default ({ onClick, cities, currentCity }) => {
    return(
        <div>
            <CitiesList 
                cities={cities}
                currentCity={currentCity}    
            />
            <button onClick={onClick}>Flip back</button>
        </div>
    );
}