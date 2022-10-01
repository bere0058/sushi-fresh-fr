import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1 className="text-center">À propos</h1>
            <br/>
            <p>
                Salut! C'est mon premier project sur React.js
            </p>
            <br/>
            <p>
                Je suis impatiente pour voir comme ça va a tourner    
            </p> 
        </div>
    );
};

export default About;