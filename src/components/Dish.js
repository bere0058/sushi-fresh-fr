import axios from 'axios';
import React, { useState, useEffect } from 'react';
const Dish = (data) => {
    const [isMounted, setIsMounted] = useState(true);
    useEffect (() => {
        if (isMounted) {
            const btnAll = document.querySelectorAll('button')
            btnAll.forEach(btn => {
                axios.get('http://localhost:3003/cart')
                    .then(res => res.data
                        .map(obj => {
                            if (obj.id == btn.id) {
                                btn.className = "p-2 m-auto w-75 bg-color-2 added-btn";
                            }
                        })
                    )
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
        axios.post('http://localhost:3003/cart', {
            name: dish.name,
            price: dish.price,
            id: dish.name
        });
    }
    const removeHandler = (dish) => {
        axios.delete(`http://localhost:3003/cart/${dish.name}`);
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