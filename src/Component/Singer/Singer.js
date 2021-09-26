//Individual singer card component
import './Singer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Singer = (props) => {
    const{name, genre, born, nationality, hire, img} = props.singer;
    
    return (
        <div>
            <div className="card text-white bg-dark mb-3 h-100">
                <img className=" card-image" src={img} alt="" />
                
                <div className="card-body">
                    <h3 className="card-header">{name}</h3>
                    <p>Born: {born}</p>
                    <p>Genre: {genre}</p>
                    <p>Nationality: {nationality}</p>
                    <p>Hire for: ${hire}</p>
                    <button onClick={ () => {
                        props.singerToCart(props.singer)
                    }} 
                    className="btn-hire">
                        <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                        </button>
                    <div className="social-container">
                        <i title="Spotify" className="fab fa-spotify social-icon"></i>
                        <i title="Twitter" className="fab fa-twitter social-icon"></i>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Singer;