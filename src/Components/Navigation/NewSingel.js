import React from 'react';
import './NewSingel.css';



const NewSingel = ({item})=>(
    
     
    <div className ="card">
        
            
        <img className="card-img" src={item.image} alt={item.title}/>

        <h3 className ="card-name" >{item.source.name}</h3>
        <p className="card-title">{item.title}</p>
        <a className='full-article' href={item.url}  rel="noreferrer" target="_blank">FULL ARTICLE</a>
    
        
    </div>
        
        
        

   
);


export default NewSingel;