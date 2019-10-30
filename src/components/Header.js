import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true} onClick={props.fetchLatest}>Latest</NavLink>&nbsp;
    <NavLink to="/search" activeClassName="is-active">Search</NavLink>&nbsp;
  </header>
)

export default Header;