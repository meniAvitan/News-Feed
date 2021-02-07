import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrower.css';

 
const SideDrower = props =>{
    let drowerClasses = "side-drower";
    if(props.show){
        drowerClasses = "side-drower open";   
    }
    return(
        
    <nav className = {drowerClasses} >
        <ul>
                <li>
                    <NavLink to="/mainNews">Sport</NavLink>
                </li>
                <hr/>
                <li>
                    <NavLink to="/technology">Technology</NavLink>
                </li>
                <hr/>
                <li>
                    <NavLink to="/booking">Booking</NavLink>
                </li>
                <hr/>

            </ul>
    </nav>
    );
};
    


export default SideDrower;