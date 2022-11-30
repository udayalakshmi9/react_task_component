import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';

ReactDOM.createRoot(document.getElementById('header')).render(<Header />)
ReactDOM.createRoot(document.getElementById('app')).render(<App />)
ReactDOM.createRoot(document.getElementById('footer')).render(<Footer />)