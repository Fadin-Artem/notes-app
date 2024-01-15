import React from "react";
import '../style/reset.css'
import './Header.css';

const Header = () =>{
  return(
    <div className="header">
      <nav>
          <a href="/">Logo</a>
          <button className="btn">Новая заметка</button>
      </nav>
    </div>
  );
};

export default Header;