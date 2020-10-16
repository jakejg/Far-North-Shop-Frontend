import React from 'react';
import '../styles/Cart.css';

const CartItem = ({name, img, quantity, price, handleChange, value, id}) => {
    return (
        <li className="Cart-Item">
            <div>
             <img className="Cart-Image" src={`http://127.0.0.1:5000/static/images/${img}`} alt={img} />
             </div>
            <div className="Cart-Details">
               <div className="Cart-Text">{name}</div>
            </div>
            <form className="Cart-Quantity">
                    <input className="Cart-Quantity-Inupt" type="number" onChange={handleChange} value={value} name={id} />
            </form>
            <div className="Cart-Price">
                <div className="Cart-Text">${price * quantity}</div>
            </div>
        </li>
    );
}

export default CartItem;
