import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <section>
            <main>
                <h1>Menu</h1>
                <section className="main-container">
                    <section className="menu-list">
                        <div>
                            <NavLink exact="true" to="/menu/yakitori">
                                <img src="https://www.sushifreshparis.fr/images/top-nav/icon-67.png"></img>
                                <h2>Yakitori</h2>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink exact="true" to="/menu/sushi">
                                <img src="https://www.sushifreshparis.fr/images/top-nav/icon-3.png"></img>
                                <h2>Sushi</h2>
                            </NavLink>
                        </div>
                    </section>
                </section>
            </main>
            <Navigation />
        </section>
    );
};

export default Menu;