import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrower.css';

 
const SideDrower = props =>{
    let drowerClasses = "side-drower";
    if(props.show){
        drowerClasses = "side-drower open";   
    }
    return(
     <div className="main-side">  
        <nav className = {drowerClasses} >
        <ul>
                <li className="side-li">
                    <NavLink to="/bussines">Bussines</NavLink>
                    
                </li>
                <li className="side-li">
                    <NavLink to="/technology">Technology</NavLink>
                </li>
                <li className="side-li">
                    <NavLink to="/sports">Sport</NavLink>
                </li>
                <li className="side-li">
                    <NavLink to="/world">World</NavLink>
                    
                </li>
                <li className="side-li">
                    <NavLink to="/health">Health</NavLink>
                </li>
                <li className="side-li">
                    <NavLink to="/science">Science</NavLink>
                </li>
                <li className="side-li">
                    <NavLink to="/entertainment">Entertainment</NavLink>
                </li>
                
               
            </ul>
        
        </nav>
    </div> 
    );
};
    


export default SideDrower;