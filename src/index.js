import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// component file
import BookContainer from './components/bookContainer';
import Categoris from './components/categori';
import Navbar from './components/nav';

ReactDOM.render(
  <React.StrictMode>
    <section>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookContainer />} />
          <Route path="/categories" element={<Categoris />} />
        </Routes>
      </Router>
    </section>
  </React.StrictMode>,
  document.getElementById('root'),
);
