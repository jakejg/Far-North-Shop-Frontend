import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../styles/Item.css';
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
        <Card className="ItemDetail">
            <img width="100%" src={`http://127.0.0.1:5000/static/images/${item.img}`} alt={item.img} />
            <CardBody>
                <CardTitle>{item.description}</CardTitle>
                <CardSubtitle>${item.price}</CardSubtitle>
                <CardSubtitle>{item.num_available} in stock</CardSubtitle>
                <Button onClick={() => addToCart(dispatch, id, item, 1)}>Add to Cart</Button>
            </CardBody>
        </Card>
    );
}

export default ItemDetail;
