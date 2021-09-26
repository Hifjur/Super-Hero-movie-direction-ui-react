import React from 'react';
import Singer from '../Singer/Singer';
import { useEffect, useState } from 'react';
import './Portal.css'
import CartItem from '../CartItem/CartItem';

const Portal = () => {
    const [singers, setSingers] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() =>{
        fetch('./singers.JSON')
        .then(res => res.json())
        .then(data => setSingers(data));
    },[])

    const singerToCart= (singer) => {
        if(cart.indexOf(singer)=== -1){
            const newCart = [...cart, singer]
            setCart(newCart);
        }
    }
    return (
        <div className="container portal-grid">
            <div className="singers-container">
                {
                    singers.map(singer => <Singer 
                        key={singer.key}
                        singer={singer}
                        singerToCart={singerToCart}
                    ></Singer>)
                }
            </div>
            <div className="cart-container">
                <CartItem cart={cart}></CartItem>
            </div>
        </div>
    );
};

export default Portal;