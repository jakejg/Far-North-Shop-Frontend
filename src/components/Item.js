import React, {useState} from 'react';
import {
    Link
} from 'react-router-dom';
import '../styles/Item.css';

const Item = ({id, img, name}) => {
    const [hover, setHover] = useState(false)

    const toggleHover = () => {
        setHover(!hover)
    }
    
    return (
        <div className="Item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <Link to={`/item/${id}`}>
            {hover && <div className="Item-Text-Container">
                            <div className="Item-Text">
                                {name}
                            </div>
                        </div>}
            <img className={hover ? "Item-Image hover" : "Item-Image"} src={`http://127.0.0.1:5000/static/images/${img}`} alt={img} />
            </Link>
        </div>
    );
}

export default Item;
