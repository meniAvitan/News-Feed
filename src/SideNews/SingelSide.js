import React from 'react';

const SingelSide = ({item})=>(
    <div>
        <div className="divider"></div>
        <a href={item.url} target="_blank">
            <h5>{item.source.name}</h5>
            <p>{item.title}</p>
        </a>
        <div className="section">
          
        </div>
    </div>
);

export default SingelSide;