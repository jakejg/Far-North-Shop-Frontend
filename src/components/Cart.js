import React, { useState } from 'react';
import '../styles/App.css';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/Cart.css';
import { Button } from 'reactstrap';
import { createFormState } from '../helpers/cart';
import { addToCart, subtractFromCart, getTotalPrice, validateInput } from '../helpers/cart.js';
import CartItem from './CartItem';

const Cart = () => {
    const items = useSelector(store => store) 
    const INITIAL_FORM_STATE = createFormState(items);
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        let { name, value } = e.target;
        value = validateInput(value);
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleUpdate = (e) => {

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

                            <CartItem key={item}
                                name={items[item].name} 
                                img={items[item].img} 
                                quantity={items[item].quantity}
                                price={items[item].price}
                                handleChange={handleChange}
                                value={formData[item]}
                                id={item} />
                    )}
                    <li style={{ listStyle: 'none'}}>
                        <div className="total">Total ${getTotalPrice(items)} </div>
                    </li>
                </ul>:
                <div>Nothing in your cart yet</div>
                }
                <div className="Cart-Buttons-Group">
                    <Button className='Cart-Button' onClick={handleUpdate}>Update Cart</Button>
                    <Button className='Cart-Button'>Checkout</Button>
                </div>
         
            </div>
        </div>
    );
}

export default Cart;
