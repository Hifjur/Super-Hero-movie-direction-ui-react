import React from 'react';
import Singer from '../Singer/Singer';
import { useEffect, useState } from 'react';
import './Portal.css'

const Portal = () => {
    const [singers, setSingers] = useState([]);
    useEffect(() =>{
        fetch('./singers.JSON')
        .then(res => res.json())
        .then(data => setSingers(data));
    },[])

    return (
        <div className="container portal-grid">
            <div className="singers-container">
                {
                    singers.map(singer => <Singer 
                        singer={singer}
                    ></Singer>)
                }
            </div>
            <div className="cart-container">
                <h1>cart</h1>
            </div>
        </div>
    );
};

export default Portal;