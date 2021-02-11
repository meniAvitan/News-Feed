import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import news from './news-icon.png';


const Logo =()=>{
    return(
      <div className ='ma4 mt0'>
        <Tilt className="Tilt" >
        <div className="Tilt-inner">
          <img alt= 'logo' src ={news}/> 
        </div>
        </Tilt>

      </div>
    )
}

export default Logo;