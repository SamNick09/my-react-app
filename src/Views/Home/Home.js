import React from "react";
import './Home.css'

export default function Home() {

  return(
    <div
      className="container-home"
    >

      <a href="/flex"> Go to Flex </a>
      <a href="/styled"> Go to Styled </a>

      <p>Home</p>
      
      <div className="box" > Box </div>
        
        

       <div className="box2" >
        <span className="letraBox">Box</span>
          </div>

      <img
        src={'https://imagizer.imageshack.com/img673/1086/RqG2zh.jpg'}
        className="imageclass"
      /> 

    </div>
  )
}