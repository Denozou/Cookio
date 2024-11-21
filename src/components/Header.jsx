import React from 'react';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa';

export default function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<nav className="nav">
					<span className="logo">Cookio</span>
					<ul className="menu">
						<li className="menu__item">
							<a href="#home">Home</a>
						</li>
						<li className="menu__item">
							<a href="#categories">Categories</a>
						</li>
						<li className="menu__item">
							<a href="#articles">Articles</a>
						</li>
						<li className="menu__item">
							<a href="#contacts">Contacts</a>
						</li>
					</ul>
                    
					<div className="header__profile">
						<FaUserCircle size={30} />
					</div>
				</nav>
			</div>
		</header>
	);
}

