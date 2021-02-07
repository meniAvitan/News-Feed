import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/SideDrower/DrowerToggleButton';
import DrowToggleButton from '../Navigation/SideDrower/DrowerToggleButton';
import './MainNavigation.css';


const MainNavigation = props => (
    <header className = "main-navigtion">
        <div className = "main-toggle-button">
            <DrowToggleButton click = {props.drowerClickHandler} />
        </div>
        <div className="main-navigation-logo">
            <h1>Easy Event</h1>
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
    </header>
);

export default MainNavigation;