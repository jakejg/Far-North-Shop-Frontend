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

    }, [])
    console.log(products)

    return (
        products.map(product => 
            <div>
                <img src={`http://127.0.0.1:5000/static/images/${product.img}`} />
            </div>
        )
    )
}

export default ProductList;