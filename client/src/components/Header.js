import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <nav>
            <div className="card-panel teal lighten-2" >
                <Link to={"/"} className="card-panel teal lighten-2">Home</Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li><Link to={'/shop'}>Contact us</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Header; 