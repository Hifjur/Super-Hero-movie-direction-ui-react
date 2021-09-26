import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './CartItem.css'
import Cartsinger from '../Cartsinger/Cartsinger';

const CartItem = (props) => {
   
    return (
        <div>
            <div className="cart-singer">
            <h3><FontAwesomeIcon icon={faUser} />  Singers Added:</h3>
                {
                    props.cart.map(singer => <Cartsinger key={singer} name={singer}></Cartsinger>)
                }
                <h3>Total Cost: </h3>
                
            </div>
        </div>
    );
};

export default CartItem;