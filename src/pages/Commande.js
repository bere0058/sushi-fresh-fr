import React from 'react';
import Navigation from '../components/Navigation';

const Commander = () => {
    return (
        <section>
            <main>
                <h1>Commande</h1>
                <section className="main-container">
                    <iframe className="py-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.807402717264!2d2.335876415673801!3d48.84281227928596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671c38bfd6d21%3A0x851f9b185ab05a6b!2s80%20Bd%20Saint-Michel%2C%2075006%20Paris%2C%20France!5e0!3m2!1sfr!2sca!4v1642804259208!5m2!1sfr!2sca" width="100%" height="auto" allowFullScreen="" loading="lazy"></iframe>
                    <p>80 Boulevard Saint-Michel 75006 Paris</p>
                    <section className="btn-section">
                        <div className="t-color-1 btn">Sur place</div>
                        <div className="t-color-1 btn">Livraison</div>
                    </section>
                        <h3>Paiement</h3>
                    <section className="btn-section">
                        <div className="t-color-1 btn">Carte de crédit</div>
                        <div className="t-color-1 btn">Carte de débit</div>
                    </section>
                </section>
            </main>
            <Navigation />
        </section>
    );
};

export default Commander;