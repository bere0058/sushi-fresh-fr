import React from 'react';

const Card = (props) => {
    const { country } = props
    const numberFormat = (x) => {
        return x.toString().replace(/\B=(?=(\d{3})+(?!\d))/g, "")
    }
    return (
        <div>
            <li className="card">
                <img src={country.flags.png} alt="flag"></img>
                <ul>
                    <li>{country.name.common}</li>
                    <li>{country.capital}</li>
                    <li>Pop. {numberFormat(country.population)}</li>
                </ul>
            </li>
        </div>
    );
};

export default Card;