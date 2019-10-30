import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header>
    <NavLink
      to ={{
        pathname:'/',
        state:{
          imageInfo: props.latestImage
        }
      }}
      onClick={props.componentDidMount}
      className="latest"
      exact={true}
      activeClassName="is-active">Latest
    </NavLink>&nbsp;
    <NavLink
      to="/search"
      className="search"
      activeClassName="is-active">Search
    </NavLink>&nbsp;
  </header>
)

export default Header;