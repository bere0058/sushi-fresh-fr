import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';

const Cart = () => {
    
    const getData = () => {
        axios.get('http://localhost:3003/yakitori').then((res) => console.log(res))
    }
    getData()
    return (
        <main>
            <Navigation />    
        </main>
    );
};

export default Cart;