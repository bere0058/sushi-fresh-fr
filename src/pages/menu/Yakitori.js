import Navigation from '../../components/Navigation';
import Dish from '../../components/Dish';

const Yakitori = () => {
    let selection = "yakitori"
    Dish()
    return (
        <section>
            <main className="dishes-container">
                <h2>Yakitori</h2>
                <section className="main-container">
                    {Dish(selection)}    
                </section>
            </main>
            <Navigation />
        </section>
    );
};

export default Yakitori;