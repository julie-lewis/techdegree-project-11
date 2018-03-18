import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Nav = props =>
    <nav className="main-nav">
        <ul>
	          <li><NavLink to='/cats'>Cats</NavLink></li>
	          <li><NavLink to='/dogs'>Dogs</NavLink></li>
	          <li><NavLink to='/beans'>Beans</NavLink></li>
	          <li><NavLink to='/search'>Search</NavLink></li>
        </ul>
    </nav>;


Nav.propTypes = {

};

export default Nav;