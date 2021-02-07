import React from 'react';
import './DrowToggleButton.css';
 
const DrowToggleButton = props =>(
    <button className =" toggle-button" onClick = {props.click}>
        <div className ="toggle-button-line"></div>
        <div className ="toggle-button-line"></div>
        <div className ="toggle-button-line"></div>
    </button>
);
    


export default DrowToggleButton;