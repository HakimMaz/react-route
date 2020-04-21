import React from "react";
import {Link,NavLink,withRouter} from 'react-router-dom';

const Navbar = (props) => {
      setTimeout(()=>{
     props.history.push('/about')
     },2000)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo"> Welcome</a>
        <ul className="right">

         
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
          
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);
