import React, { useState, useEffect } from 'react';
import menuData from '../components/menuData.json';

const Dish = (lo) => {
    const selection = lo;
    const data = menuData;
    const [playOnce, setPlayOnce] = useState(true);
    const [sortedData, setSortedData] = useState([]);
    const selectionData = sortedData.selection;

    useEffect(() => {
        if (playOnce) {
            const sortedPrice = () => {
                const priceObject = Object.keys(data).map((i) => data[i]);
                const sortedArray = priceObject.sort((a, b) => {
                    return b.price - a.price
                });
                setSortedData(sortedArray[0]);
            };
            sortedPrice();
            setPlayOnce(false);
        }
    }, [playOnce, data]);
    /* Dishes box */
    console.log(sortedData.yakitori)
    console.log(selectionData)
    let dishBox;
    if (sortedData.yakitori) {
        dishBox =
            sortedData.yakitori.map((dish) => (
                <div className="border-top border-white border-1 mb-3">
                    <h3 key={dish.name}>{dish.name}</h3>
                    <img key={dish.img} src={dish.img} className="img-fluid"></img>
                    <li key={dish}>{dish.price}€</li>
                    <h4 key={dish.pieces}>{dish.pieces} Pieces</h4>
                </div>
                )
            )

    }
    return (<section>
        {dishBox}
    </section>);
};

export default Dish;