import React from 'react';
import Navigation from '../../components/Navigation';
import Dish from '../../components/Dish';
import menuData from '../../assets/menuData.json';

const data = menuData[0].sushi;
const Sushi = () => {
    return (
        <main> 
            <section className="dish-container">
                <h2>Yakitori</h2>
                {Dish(data)}
            </section>
            <Navigation />
        </main>
    );
};

export default Sushi;