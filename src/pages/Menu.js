import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import menuData from '../assets/menuData.json';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const [imgSrc, setImgSrc] = useState([]);
    const [linkSrc, setLinkSrc] = useState([]);
    let i = 0;
    useEffect (() => {
        const imgData = [];
        const linkData = [];
        menuData.map((data) => {
            for (let category in data) {
                linkData.push(category);
                imgData.push(data[category][0]["img"]);
                };
            }       
        );
        setImgSrc(imgData);
        setLinkSrc(linkData);
    }, [])
    return (
        <section>
            <main>
                <h1>Menu</h1>
                <section className="main-container">
                    <section className="menu-list">
                        <div>
                            {  
                                imgSrc.map((src) => (
                                    <NavLink exact="true" to={"/menu/" + linkSrc[i]}>
                                        <img src={src}></img>
                                        <h2>{linkSrc[i]}</h2>
                                        <div className="d-none">{i++}</div>
                                    </NavLink>
                                ))
                            } 
                        </div>
                    </section>
                </section>
            </main>
            <Navigation />
        </section>
    );
};

export default Menu;