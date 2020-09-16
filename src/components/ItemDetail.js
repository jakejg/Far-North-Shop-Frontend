import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../styles/Item.css';
import { add } from '../actions/cartActions';
import { dispatch, useDispatch } from 'react-redux';
import productsAPI from '../api/productsAPI';
import {useParams} from 'react-router-dom';

const ItemDetail = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            let data = await productsAPI.getItem(id);
            setItem(data)
        }
        getData();

    }, [])
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(id, item))
    }
    
    return (
        <Card className="ItemDetail">
            <img width="100%" src={`http://127.0.0.1:5000/static/images/${item.img}`} alt={item.img} />
            <CardBody>
                <CardTitle>{item.description}</CardTitle>
                <CardSubtitle>${item.price}</CardSubtitle>
                <Button onClick={addToCart}>Add to Cart</Button>
            </CardBody>
        </Card>
    );
}

export default ItemDetail;
