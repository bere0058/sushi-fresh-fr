import Navigation from '../components/Navigation';
import React, { useState, useEffect } from 'react';
import yakitori from '../assets/yakitori.jpeg';
import yakisoba from '../assets/yakisoba.jpg';
import teriyaki from '../assets/teriyaki.jpg';

const Menu = (props) => {
    const { dish } = props;
    const [playOnce, setPlayOnce] = useState(true);
    /* const data = menuData;  */
    const [sortedData, setSortedData] = useState([]);
    
    /* useEffect(() => {
        if (playOnce) {
            const sortedPrice = () => {
                const priceObject = Object.keys(data).map((i) => data[i]);
                const sortedArray = priceObject.sort((a, b) => {
                    return b.price - a.price
                });
                setSortedData(sortedArray);
            };
            sortedPrice();
        }
    }, [playOnce, data])
    console.log(sortedData)   */
    return (
        <section>
            <main>
                <h1>Menu</h1>
                <section className="main-container">
                    <h2>Yaki 1</h2>
                    <section>
                        <h2 key = "s"></h2>
                    </section>
                    <img srcSet={yakitori} className="w-100 py-2" alt="yakitori"></img>
                    <h3>Yakitori</h3>
                    <ul>
                        <li>Salmon</li>
                        <li>Eggs</li>
                        <li>Chicken</li>
                    </ul>
                    <h2>Yaki 2</h2>
                    <img srcSet={yakisoba} className="w-100 py-2" alt="yakisoba"></img>
                    <h3>Yakisoba</h3>
                    <ul>
                        <li>Gyoza</li>
                        <li>Rice</li>
                        <li>Cheese</li>
                    </ul>
                    <h2>Yaki 3</h2>
                    <img srcSet={teriyaki} className="w-100 py-2" alt="teriyaki"></img>
                    <h3>Teriyaki</h3>
                    <ul>
                        <li>Avocado</li>
                        <li>Rice</li>
                        <li>Salmon</li>
                    </ul>
                </section>
            </main>
            <Navigation />
        </section>
    );
};

export default Menu;