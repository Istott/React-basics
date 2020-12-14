import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = props => (
    <div className="saved-list">
        <div className="home">
            <NavLink to='/users' className="home-button">Users </NavLink>
        </div>

        <div className="pod">
            <NavLink to='/' className="pod-button">POD </NavLink>
        </div>

    </div>
    
);

export default NavBar;