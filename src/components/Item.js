import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../styles/Item.css';

const Item = ({img, description, price, type}) => {
    return (
        <Card className="Item">
            <img width="100%" src={`http://127.0.0.1:5000/static/images/${img}`} alt={img} />
            <CardBody>
                <CardTitle>{description}</CardTitle>
                <CardSubtitle>${price}</CardSubtitle>
                <Button>Add to Cart</Button>
            </CardBody>
        </Card>
    );
}

export default Item;
