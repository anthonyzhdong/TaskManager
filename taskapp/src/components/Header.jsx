import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/transactionpage">TransactionPage </NavLink>
            <NavLink to="/about">About</NavLink>

        </nav>


    )



}
export default Header;