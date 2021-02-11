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
            <h1>ALL NEWS</h1>
        </div>
        <div className = "spacer" />
        <div className="main-navigation-item">
            <ul>
                <li className = "main-li">
                    <NavLink to="/bussines">Bussines</NavLink>
                    
                </li>
                <li className = "main-li">
                    <NavLink to="/technology">Technology</NavLink>
                </li>
                <li className = "main-li">
                    <NavLink to="/sports">Sport</NavLink>
                </li>
                <li className = "main-li">
                    <NavLink to="/world">World</NavLink>
                    
                </li>
                <li className = "main-li">
                    <NavLink to="/health">Health</NavLink>
                </li>
                {/* <li className = "main-li">
                    <NavLink to="/science">Science</NavLink>
                </li>
                <li className = "main-li">
                    <NavLink to="/entertainment">Entertainment</NavLink>
                </li> */}

            </ul>
        </div>
        <div className = "logo-icon-desktop">
             <Logo />
        </div>
    </header>
);

export default MainNavigation;