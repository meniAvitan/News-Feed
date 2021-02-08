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
                    <li>
                        <NavLink to="/mainNews">Sport</NavLink>
                    </li>
                  
                    <li>
                        <NavLink to="/technology">Technology</NavLink>
                    </li>
                  
                    <li>
                        <NavLink to="/booking">Booking</NavLink>
                    </li>
                  

                </ul>
        </nav>
    </div> 
    );
};
    


export default SideDrower;