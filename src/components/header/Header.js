import React from "react";
import Button from "./button";
import '../style/reset.css'
import './Header.css';

const Header = () =>{
  return(
    <div className="header">
      <nav>
          <a href="/">Logo</a>
          <Button/>
      </nav>
    </div>
  );
};

export default Header;