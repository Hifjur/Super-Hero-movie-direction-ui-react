import './Singer.css'
const Singer = (props) => {
    const{key, name, genre, born, nationality, hire, img} = props.singer;
    return (
        <div>
            <div className="card text-white bg-dark mb-3 h-100">
                <img className=" card-image" src={img} alt="" />
                
                <div className="card-body">
                    <h3 className="card-header">{name}</h3>
                    <p>Born: {born}</p>
                    <p>Genre: {genre}</p>
                    <p>Country: {nationality}</p>
                    <p>Hire for: ${hire}</p>
                </div>
                
            </div>
        </div>
    );
};

export default Singer;