import React from 'react';
import '../styles/App.css';
import { useSelector } from 'react-redux';

const Cart = () => {
    const items = useSelector(store => store) || {}

    console.log(items)
    return (
        <div className="Cart">
            <div className="Cart-Container">
                <ul>
                    {Object.keys(items).map(item =>
                        <li className="Cart-Item">
                            <div className="Cart-Details">
                                <img src={`http://127.0.0.1:5000/static/images/${items[item].img}`} alt={item.img} />
                            </div>
                            <div className="Cart-Quantity">

                            </div>
                            <div className="Cart-Price">
                                <div>{items[item].price}</div>
                            </div>
                        </li>
                    )}
                </ul>
      
            </div>
        </div>
    );
}

export default Cart;
