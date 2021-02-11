import React from 'react';
import './About.css';
import FIcon from './facebook-icon.png';
import LIcon from './linkedin-icon.png';
import GIcon from './github-icon.png';


const About = (props) =>{
    return(
        <>
        
     <div className="main-header">
        <div className="credit">
            <p>Created and designed by: Meni Avitan</p>
        </div>
        <a href="https://www.facebook.com/me/" rel="noreferrer" target="_blank" className ="icon f-icon">
            <img className ="icon-img" src={FIcon}></img>
        </a>
        <a href="https://www.linkedin.com/in/menachem-avitan-563a0a203/" rel="noreferrer" target="_blank"  className ="icon l-icon">
            <img className ="icon-img" src={LIcon}></img>
        </a>
        <a href="https://github.com/meniAvitan" rel="noreferrer" target="_blank"  className ="icon g-con">
            <img className ="icon-img" src={GIcon}/>
        </a>
     </div>
     </>
    )
    
}
export default About;