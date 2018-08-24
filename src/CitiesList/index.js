import React from 'react';
import CityItem from "./CityItem";
import "./list.css";

export default ({ cities, currentCity, onSelect }) => {
    return( 
        <ul className="list">
        {cities.map(city => {
            return ( 
                <CityItem 
                key={city.woeid}
                isSelected={currentCity.title === city.title} 
                city={city}
                onSelect={onSelect} />
            );
        }
    )}
        </ul>
    );
}