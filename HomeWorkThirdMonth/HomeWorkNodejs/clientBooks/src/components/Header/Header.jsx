import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return <header><h1> <NavLink to='/'> Books Storage</NavLink></h1></header>;
    }
}

export default Header;