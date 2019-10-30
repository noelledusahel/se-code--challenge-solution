import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <header>
    <Link
      to ={{
        pathname:'/',
        state:{
          imageInfo: props.latestImage
        }
      }}
      onClick={props.componentDidMount}
      className="latest">Latest
    </Link>&nbsp;
    <Link
      to="/search"
      className="search">Search
    </Link>&nbsp;
  </header>
)

export default Header;