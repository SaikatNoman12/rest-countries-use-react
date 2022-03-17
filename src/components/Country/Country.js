import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, region, population, flags} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>Name: {name.common}</h1>
            <h3>Capital: {capital}</h3>
            <h4>Population: {population}</h4>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;