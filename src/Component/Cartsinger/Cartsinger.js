import React from 'react';
import './Cartsinger.css'
const Cartsinger = (props) => {
    return (
        <div>
            <h4 className="name-card">{props.name}</h4>
        </div>
    );
};

export default Cartsinger;