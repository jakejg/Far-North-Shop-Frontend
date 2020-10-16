import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../styles/ItemDetail.css';
import { useDispatch } from 'react-redux';
import productsAPI from '../api/productsAPI';
import {useParams} from 'react-router-dom';
import { addToCart } from '../helpers/cart.js';


const ItemDetail = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            let data = await productsAPI.getItem(id);
            setItem(data)
        }
        getData();

    }, [])
    
    return (
        <div className="ItemDetail">
            <div>
                <img className="ItemDetail-Image" src={`http://127.0.0.1:5000/static/images/${item.img}`} alt={item.img} />
            </div>
            <div>
                <div className="ItemDetail-Name">{item.description}</div>
                <div><span className="ItemDetail-Price">${item.price}</span> <span>{item.num_available} in stock</span> </div>         
                
                <Button onClick={() => addToCart(dispatch, id, item, 1)}>Add to Cart</Button>
            </div>
        </div>
    );
}

export default ItemDetail;
