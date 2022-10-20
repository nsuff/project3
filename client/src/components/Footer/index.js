import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <header>
            <div>
                <nav>
                    <ul>
                        {/* this will need to be moved off footer at some point */}
                        <li>
                            <Link to="/recipies">Recipies test</Link>
                        </li>
                        <li>
                            <Link to="/ingredients">Ingredients test</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Footer;