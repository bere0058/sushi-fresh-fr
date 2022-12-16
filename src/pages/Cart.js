import React from 'react';
import db from '../db';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { collection, query, onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore"; 

const Cart = () => {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    const [cartData, setCartData] = useState([]);
    const [cartTotal, setCartTotal] = useState();
    const [mainH, setMainH] = useState();
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
            const selection = query(collection(db, 'cart'))
            let i = 0
            const retriving = onSnapshot(selection, (snapshot) => {
                const data = []
                snapshot.forEach((doc) => data.push({
                    id: doc.id,
                    price: doc.data().price,
                    name: doc.data().name,
                    quantity: doc.data().quantity
                }))
                setCartData(data)
                data.forEach((dish) => {
                    i = i + dish.price * dish.quantity
                })
                setCartTotal(i)
                i = 0
            })
    }
    const removeHandler = (dish) => {
        deleteDoc(doc(db, "cart", dish.name));
    };
    const addHandler = (dish) => {
        updateDoc(doc(db, "cart", dish.name), {
            quantity: dish.quantity + 1
        });
    };
    const sustractHandler = (dish) => {
        updateDoc(doc(db, "cart", dish.name), {
            quantity: dish.quantity - 1
        });
        if (dish.quantity === 1) {
            removeHandler(dish)
        };
    };
    return (
        <section>
            <main style={{minHeight: '88vh'}}>
                <h1>Ma commande</h1>
                <section className="main-container">
                    <div className="d-flex flex-row justify-content-between py-3">
                        <h4 className="text-start t-color-2 col-5">Produits</h4>
                        <h4 className="t-color-2 col-4">Quantité</h4>
                        <h4 className="t-color-2 col-3">Prix</h4>
                    </div>
                    {cartData.map((dish) => (
                        <div className="d-flex flex-row justify-content-between py-2" id={dish.name + " added"}>
                            <p className="col-5 text-start" key={dish.name}>{dish.name}</p>
                            <div className="d-flex col-4 px-2">
                                <button className="fa-plus t-color-1" onClick={() => addHandler(dish)} ></button>
                                <p className="m-auto">{dish.quantity}</p>
                                <button className="t-color-1" onClick={() => sustractHandler(dish)}>-</button>
                            </div>
                            <div className="d-flex col-3">
                                <p className="m-auto">{dish.price * dish.quantity} €</p>
                            </div>
                        </div>
                    ))}
                    <div className="d-flex justify-content-between pt-4">
                        <p className="text-start t-color-2 col-5">Total</p>
                        <p className='col-3'>{cartTotal} €</p>
                    </div>
                </section>
            </main>
            <Navigation />    
        </section>
    );
};

export default Cart;