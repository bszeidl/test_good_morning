import React from "react";

const Hello = (props) => {
  if (props.name) {
    return <h1 className='titleName'>Hello, {props.name}!</h1>;
  } else {
    return <h1 className='titleName'>Hey, stranger!</h1>;
  }  
}

export default Hello;