import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <section className="home bg-img-custom">
            <main className="home-section">
                <div className="logo-section bg-img-custom"></div>
            </main>
            <Navigation />
        </section>
    );
}

export default Home;