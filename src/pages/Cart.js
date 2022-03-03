import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get('http://localhost:3003/cart').then((res) => setCartData(res.data))
    }
    return (
        <section>
            <main>
                <h1>Ma commande</h1>
                <section className="main-container">
                    <div className="row">
                        <h3 className="col text-center t-color-2">Article</h3>
                        <h3 className="col text-center t-color-2"> Prix</h3>
                    </div>
                    {cartData.map((dish) => (
                        <div className="row" id={dish.name + " added"}>
                            <p className="col" key={dish.name}>{dish.name}</p>
                            <p className="col d-flex justify-content-center align-items-center" key={dish.price}>{dish.price}€</p>
                        </div>
                    ))}
                </section>
            </main>
            <Navigation />    
        </section>
    );
};

export default Cart;