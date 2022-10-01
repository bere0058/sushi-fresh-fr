import axios from 'axios';
import db from '../db';
import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, doc, setDoc, deleteDoc } from "firebase/firestore"; 
const Dish = (data) => {
    const [isMounted, setIsMounted] = useState(true);
    useEffect (() => {
        if (isMounted) {
            const btnAll = document.querySelectorAll('button')
            btnAll.forEach(btn => {
                const selection = query(collection(db, 'cart'))
                const retriving = onSnapshot(selection, (snapshot) => {
                    const data = []
                    snapshot.forEach((doc) => data.push({
                        id: doc.id,
                        price: doc.data().price,
                        name: doc.data().name
                    }))
                    data.map(obj => {
                        if (obj.name === btn.id) {
                            btn.className = "p-2 m-auto w-75 bg-color-2 added-btn"
                        }
                    })
                })
            })
        }
        setIsMounted(false)
    }, [isMounted])
    const handler = (dish) => {
        let btn = document.getElementById(dish.name); 
        if (btn.classList.contains('add-btn')) { 
            postHandler(dish);
            btn.classList.remove('bg-color-1');
            btn.classList.add('bg-color-2');
            btn.classList.remove('add-btn');
            btn.classList.add('added-btn');
        } 
        else {
            removeHandler(dish);
            btn.classList.add('bg-color-1');
            btn.classList.remove('bg-color-2');
            btn.classList.add('add-btn');
            btn.classList.remove('added-btn');
        };
    }
    const postHandler = (dish) => {
        setDoc(doc(db, "cart", dish.name), {
            name: dish.name,
            price: dish.price,
            quantity: 1
          });
    }
    const removeHandler = (dish) => {
        deleteDoc(doc(db, "cart", dish.name));
    };
    return (
        <section>
            {
                    data.sort((a, b) => a.price - a.price).map((dish) => (
                        <section className="dish-card mb-3" role="article">
                            <h3 key={dish.name}>{dish.name}</h3>
                            <img key={dish.img} src={dish.img} className="img-fluid"></img>
                            <p key={dish.price}>{dish.price}€</p>
                            <h4 key={dish.pieces}>{dish.pieces} Pièces</h4>
                            <button id={dish.name} className={"p-2 m-auto w-75 bg-color-1 add-btn"}
                                onClick={() => handler(dish)}
                            >
                            </button>
                        </section>
                    )
                )
            }
            
        </section>)
};

export default Dish;