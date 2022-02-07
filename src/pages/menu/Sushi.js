import Navigation from '../../components/Navigation';
import Dish from '../../components/Dish';
import menuData from '../../components/menuData.json';

const rawData = menuData[0].sushi;
const Sushi = () => {
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

export default Sushi;