import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Commander from './pages/Commande';
import Yakitori from './pages/Menu/Yakitori';
import Sushi from './pages/Menu/Sushi';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/commander" element={<Commander />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/menu/yakitori" element={<Yakitori />} />
        <Route exact path="/menu/sushi" element={<Sushi />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;