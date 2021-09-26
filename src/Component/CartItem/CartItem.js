// The cart area 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons'
import './CartItem.css'
import Cartsinger from '../Cartsinger/Cartsinger';

const CartItem = (props) => {
    const {cart} = props;
    let total =0 ;
    for(const singer of cart){
        total = total+ singer.hire;
    }
    
    return (
        <div>
            <div className="cart-singer">
            <h3><FontAwesomeIcon icon={faUser} />  Singers Added:{props.cart.length}</h3>
                {
                    props.cart.map(singer => <Cartsinger key={singer.key} name={singer.name}></Cartsinger>)
                }
                <h3>Total Cost: $ <span className="text-color">{total}</span></h3>
                <button className="btn-confirm"><FontAwesomeIcon icon={faCheck} /> Confirm</button>
            </div>
        </div>
    );
};

export default CartItem;