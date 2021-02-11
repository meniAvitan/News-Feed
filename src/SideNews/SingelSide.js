import React from 'react';
import './SingelSide.css';

const SingelSide = ({item})=>(
    <div className ="side-card">
        
            
    <img className="side-img" src={item.image} alt={item.title}/>

    <p className ="side-name" >{item.title}</p>
    {/* <p className="card-title">{item.title}</p> */}
    <a className='side-full-article' href={item.url}  rel="noreferrer" target="_blank">FULL ARTICLE</a>

    
</div>
);

export default SingelSide;