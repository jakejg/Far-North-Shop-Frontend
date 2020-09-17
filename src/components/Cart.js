import React from 'react';
import '../styles/App.css';
import { useSelector } from 'react-redux';
import '../styles/Cart.css';

const Cart = () => {
    const items = useSelector(store => store) || {};

    const getTotalPrice = () => {
        let total = 0;
        for (let item of Object.keys(items)){
            total += (items[item].price * items[item].quantity)
        }
        return total;
    }

    return (
        <div className="Cart">
            <div className="Cart-Container">
                <ul>
                    {Object.keys(items).map(item =>
                        <li className="Cart-Item">
                            <div>
                             <img className="Cart-Image" src={`http://127.0.0.1:5000/static/images/${items[item].img}`} alt={item.img} />
                             </div>
                            <div className="Cart-Details">
                               <div className="Cart-Text">{items[item].name}</div>
                            </div>
                            <div className="Cart-Quantity">
                                <div className="Cart-Text">{items[item].quantity}</div>
                            </div>
                            <div className="Cart-Price">
                                <div className="Cart-Text">${items[item].price}</div>
                            </div>
                        </li>
                    )}
                    <li style={{ listStyle: 'none'}}>
                        <div className="total">Total ${getTotalPrice()} </div>
                    </li>
                </ul>
      
            </div>
        </div>
    );
}

export default Cart;
