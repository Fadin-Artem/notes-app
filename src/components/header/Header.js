import React from "react";
import Button from "./button";
import logo from '../../public/notelogo.jpg'
import '../style/reset.css'
import './Header.css';

const Header = () =>{
  return(
    <div className="header">
      <nav>
          <a href="/" className="nav-link"><img src={logo} alt="note logo"></img></a>
          <Button/>
      </nav>
    </div>
  );
};

export default Header;