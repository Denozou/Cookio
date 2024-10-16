import React from 'react';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">cookio</div>
      <nav className="header__nav">
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#articles">Articles</a>
        <a href="#contacts">Contacts</a>
      </nav>
      <div className="header__profile">
        <FaUserCircle size={30} />
      </div>
    </header>
  )
}
