import React from 'react';
import Navigation from '../../components/Navigation';
import Dish from '../../components/Dish';
import menuData from '../../assets/menuData.json';

let rawData = menuData[0].yakitori;
const Yakitori = () => {
    return (
        <section>
            <main className="dish-container">
                <h2>Yakitori</h2>
                <section className="main-container">
                    {Dish(rawData)}
                </section>
            </main>
            <Navigation />
        </section>
    );
};

export default Yakitori;