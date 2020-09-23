import React, { useState } from 'react';
import '../styles/App.css';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Cart.css';
import { Button } from 'reactstrap';
import { createFormState } from '../helpers/cart';
import { addToCart, subtractFromCart } from '../helpers/cart.js';

const Cart = () => {
    const items = useSelector(store => store) 
    const INITIAL_FORM_STATE = createFormState(items);
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        let total = 0;
        for (let item of Object.keys(items)){
            total += (items[item].price * items[item].quantity)
        }
        return total;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = (e) => {

        // check if form quantities are different from item quantities and add or subtract if needed
        for (let item of Object.keys(items)){
     
            if (formData[item] > items[item].quantity) {
                addToCart(dispatch, items[item]._id, items[item], +formData[item])
            }
            else if (formData[item] < items[item].quantity) {
                subtractFromCart(dispatch, items[item]._id, items[item], +formData[item])
            }
        }
    }


    return (
        <div className="Cart">
            <div className="Cart-Container">
                {Object.keys(items).length ? 
                <ul>
                    {Object.keys(items).map(item =>
                        // add this component <CartItem item={item} />
                        // remove negative inputs
                        <li key={item} className="Cart-Item">
                            <div>
                             <img className="Cart-Image" src={`http://127.0.0.1:5000/static/images/${items[item].img}`} alt={item.img} />
                             </div>
                            <div className="Cart-Details">
                               <div className="Cart-Text">{items[item].name}</div>
                            </div>
                            <form className="Cart-Quantity">
                                    <input className="Cart-Quantity-Inupt" type="number" min="0" onChange={handleChange} value={formData[item]} name={item} />
                            </form>
                            <div className="Cart-Price">
                                <div className="Cart-Text">${items[item].price * items[item].quantity}</div>
                            </div>
                        </li>
                    )}
                    <li style={{ listStyle: 'none'}}>
                        <div className="total">Total ${getTotalPrice()} </div>
                    </li>
                </ul>:
                <div>Nothing in your cart yet</div>
                }
                <div className="Cart-Buttons-Group">
                    <Button className='Cart-Button' onClick={handleSubmit}>Update Cart</Button>
                    <Button className='Cart-Button'>Checkout</Button>
                </div>
         
            </div>
        </div>
    );
}

export default Cart;
