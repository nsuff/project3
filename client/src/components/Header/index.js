import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <Link to="/recipies">Recipies</Link>
                        <Link to="/ingredients">Ingredients</Link>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;