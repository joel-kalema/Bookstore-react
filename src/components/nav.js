import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUserDelete } from 'react-icons/ai';

const Navbar = () => (
  <nav>
    <h1>BookStore CMS</h1>
    <div className="switch">
      <Link to="/">BOOKS</Link>
      <Link to="/categories" className="categories">CATEGORIES</Link>
    </div>
    <AiOutlineUserDelete className="user-icon" />
  </nav>
);

export default Navbar;
