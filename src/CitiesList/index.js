import React from 'react';
import CityItem from "./CityItem";
import "./list.css";

export default ({ cities, currentCity }) => {
    return( 
        <ul className="list">
        {cities.map(city => {
            return ( 
                <CityItem 
                key={city.woeid}
                isSelected={`list-item ${currentCity.title === city.title ? 'is-selected' : ''}`} 
                city={city} />
            );
        }
    )}
        </ul>
    );
}