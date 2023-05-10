import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const items = [
        { name: "Home", to: '/' },
        { name: "New Post", to: '/newpost' },
    ]

    return (
        <header>
            <ul className='d-flex bg-primary'>
                {items.map((item, index) => (
                    <li key={index} className='nav-item'>
                        <NavLink to={item.to} className='nav-link text-white'>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Navigation;

