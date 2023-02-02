import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { Article } from './pages/Article';
import { Blog } from './pages/Blog';
import { Contacto } from './pages/Contacto';
import { Despacho } from './pages/Despacho';
import { Nosotros } from './pages/Nosotros';
import { Notfound } from './pages/Notfound';
import { Principal } from './pages/Principal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Principal />} />
          <Route path="despacho" element={<Despacho />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Article />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
