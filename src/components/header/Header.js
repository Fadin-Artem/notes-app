import React from "react";
import '../style/reset.css'
import './Header.css';

const Header = () =>{
  return(
    <div>
      <nav>
        <ul>
          <li className="nav-link"><a>Logo</a></li>
          <li className="nav-link"><button className="btn">Новая заметка</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;