import React from "react";
import Button from "./button";
import logo from '../../public/notelogo.jpg'
import '../style/reset.css'
import './Header.css';
import Form from "./addNoteForm";

const Header = () =>{
  return(
    <div className="header">
      <nav>
          <a href="/" className="nav-link"><img src={logo} alt="note logo"></img></a>
          <Button/>
      </nav>
      <Form/>
    </div>
  );
};

export default Header;