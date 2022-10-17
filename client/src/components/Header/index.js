import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div>
                <nav>
                    <ul>
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