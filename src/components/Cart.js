import React, { useState } from 'react';
import '../styles/App.css';
import { useSelector } from 'react-redux';
import '../styles/Cart.css';
import { Button } from 'reactstrap';

function createFormState(items){
    const form = {}
    for (let item of Object.keys(items)){
        form[item] = items[item].quantity
    }
    return form;
}

const Cart = () => {
    const items = useSelector(store => store) || {};
    const INITIAL_FORM_STATE = createFormState(items);
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    console.log(formData)

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

    return (
        <div className="Cart">
            <div className="Cart-Container">
                <ul>
                    {Object.keys(items).map(item =>
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
                                <div className="Cart-Text">${items[item].price}</div>
                            </div>
                        </li>
                    )}
                    <li style={{ listStyle: 'none'}}>
                        <div className="total">Total ${getTotalPrice()} </div>
                    </li>
                </ul>
                <Button >Update Cart</Button>
                <Button>Checkout</Button>
            </div>
        </div>
    );
}

export default Cart;
