import React from 'react';
import './NewSingel.css';



const NewSingel = ({item})=>(
    
       <div className='container'>
            <div className ="card">
                <div className ="card-image">
                    <img src={item.image} alt={item.title}/>
                    <span className ="card-title" >{item.source.name}</span>
                </div>
                <div className="card-content">
                    <p>{item.title}</p>
                </div>

                <hr/>
                <div className="card-action">
             <a href={item.url}  rel="noreferrer" target="_blank">FULL ARTICLE</a>
         </div>
            </div>
             
         </div>
        

   
);


export default NewSingel;