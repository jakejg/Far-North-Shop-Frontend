import React, {useEffect, useState} from 'react';
import productsAPI from './api/productsAPI';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let data = await productsAPI.loadProducts();
            setProducts(data)
        }
        getData();

    })
    console.log(products)

    return (
        products.map(product => {
            
        })
    )
}

export default ProductList;