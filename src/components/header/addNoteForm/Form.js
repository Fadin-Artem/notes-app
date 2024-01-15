import React from "react";
import './Form.css'
import Button from "../button";

const Form = () =>{
  return(
    <div>
      <form className="hidden">
        <input type="text" placeholder="Список дел"></input>
        <textarea placeholder="Купить хлеб..." cols={30} rows={10}></textarea>
        <Button/>
      </form>
    </div>
  );
};

export default Form;