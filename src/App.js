import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Commander from './pages/Commande';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter basename="https://bere0058.github.io/sushi-fresh-fr">
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/menu" element={<Menu />}>
        </Route>
        <Route exact path="/commander" element={<Commander />}>
        </Route>
        <Route element={<NotFound />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;