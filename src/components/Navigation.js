import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    return (
        <nav className="sticky-top bottom-0 w-100">
            <section className="navigation nav-section p-3">
                <ul className="nav justify-content-center">
                    <li className="nav-item bg-img-custom me-auto">
                        <NavLink exact="true" to="/" className={({ isActive }) => isActive ? "nav-active" : ""}  >
                            <div></div>
                        </NavLink>
                    </li>
                    <li className="nav-item bg-img-custom me-auto">
                        <NavLink exact="true" to="/Cart" className={({ isActive }) => isActive ? "nav-active" : ""}  >
                            <div></div>
                        </NavLink>
                    </li>
                    <li className="nav-item bg-img-custom my-auto me-auto nav-btn" onClick={() => {
                            const navDisplay = document.querySelector('.nav-display');
                            const main = document.querySelector('main')
                            const navigation = document.querySelector('.navigation');
                            
                            navDisplay.classList.toggle('nav-display-move');
                            main.classList.toggle('blur-effect');
                            navDisplay.style.height = 'calc(100vh - '+ navigation.clientHeight + 'px)'   
                        }
                    } >
                    </li>
                </ul>
            </section>
            <section className="nav-display position-fixed w-100 align-content-center d-flex top-0">
                <ul className="m-auto">
                    <li>
                        <NavLink exact="true" to="/Menu" className={({ isActive }) => isActive ? "nav-active" : ""} className="h2">Menu</NavLink> 
                    </li>
                    <li>
                        <NavLink exact="true" to="/Commander" className={({ isActive }) => isActive ? "nav-active" : ""} className="h2">Commander</NavLink> 
                    </li>
                </ul>
            </section>
        </nav>
    );

};

export default navigation;