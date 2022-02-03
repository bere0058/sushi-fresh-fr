import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <section>
            <main>
                <h1>Menu</h1>
                <section className="main-container">
                    <NavLink exact="true" to="/menu/yakitori">Yakitori</NavLink>
                </section>
            </main>
            <Navigation />
        </section>
    );
};

export default Menu;