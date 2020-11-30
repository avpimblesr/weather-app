import React from 'react';
import '../App.css';

const Header = (props) => {
    console.log("Props:",props)
    return(
      <header className="header">
      <h2>{props.text}</h2>
      </header>
    )
  }

export default Header