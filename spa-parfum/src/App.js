import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Showcase from 'pages/Showcase';
import Client from 'pages/Client';
import Women from 'pages/Women';
import Men from 'pages/Men';
import Child from 'pages/Child';
import Cart from 'pages/Cart';
import Layout from 'components/Layout';

import './globalStyles.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/client" element={<Client />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/child" element={<Child />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
