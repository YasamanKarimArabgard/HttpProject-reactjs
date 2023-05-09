import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const items = [
        { name: "Home", to: '/' },
        { name: "New Post", to: '/newpost' },
    ]

    return (
        <header>
            <ul className='d-flex bg-light'>
                {items.map((item, index) => (
                    <li key={index} className='nav-item'>
                        <NavLink to={item.to} className='nav-link text-secondary'>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Navigation;

