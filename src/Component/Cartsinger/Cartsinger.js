//Singer Name compnent in the cart
import React from 'react';
import './Cartsinger.css'
const Cartsinger = (props) => {
    const {name} = props;
    return (
        <div>
            <h4 className="name-card">{name}</h4>
        </div>
    );
};

export default Cartsinger;