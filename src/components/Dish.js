import React, { useState, useEffect } from 'react';
import menuData from '../components/menuData.json';

const Dish = (rawData) => {
    const data = menuData;
    const [playOnce, setPlayOnce] = useState(true);
    const [sortedData, setSortedData] = useState([]);;

    useEffect(() => {
        if (playOnce) {
            const sortedPrice = () => {
                const sortedArray = rawData.sort((a, b) => {
                    return b.price - a.price
                });
                setSortedData(sortedArray);
            };
            sortedPrice();
            setPlayOnce(false);
        }
    }, [playOnce, data]);
    /* Dishes box */
    let dishBox;
    if (sortedData) {
        dishBox =
            sortedData.map((dish) => (
                <section className="dish-card mb-3" role="article">
                    <h3 key={dish.name}>{dish.name}</h3>
                    <img key={dish.img} src={dish.img} className="img-fluid"></img>
                    <li key={dish}>{dish.price}€</li>
                    <h4 key={dish.pieces}>{dish.pieces} Pièces</h4>
                </section>
                )
            )

    }
    return (<section>
        {dishBox}
    </section>);
};

export default Dish;