import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/SideDrower/DrowerToggleButton';
import DrowToggleButton from '../Navigation/SideDrower/DrowerToggleButton';
import './MainNavigation.css';
import Logo from '../Navigation/Logo/Logo';


const MainNavigation = props => (
    <header className = "main-navigtion">
        
        <div className = "main-toggle-button">
            <DrowToggleButton click = {props.drowerClickHandler} />
        </div>
        <div className = "logo-icon">
             <Logo />
        </div>
       
        <div className="main-navigation-logo">   
            <h1>News</h1>
        </div>
        <div className = "spacer" />
        <div className="main-navigation-item">
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
        </div>
        <div className = "logo-icon-desktop">
             <Logo />
        </div>
    </header>
);

export default MainNavigation;