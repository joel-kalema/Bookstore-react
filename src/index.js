import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// component file
import { Provider } from 'react-redux';
import BookContainer from './components/bookContainer';
import Categoris from './components/categori';
import Navbar from './components/nav';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <section>
      <Router>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<BookContainer />} />
            <Route path="/categories" element={<Categoris />} />
          </Routes>
        </Provider>
      </Router>
    </section>
  </React.StrictMode>,
  document.getElementById('root'),
);
