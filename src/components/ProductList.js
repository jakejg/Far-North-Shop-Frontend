import React, {useEffect, useState} from 'react';
import productsAPI from '../api/productsAPI';
import Item from './Item';
import '../styles/ProductList.css';

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
        <div className="ProductList">
            {products.map(product => 
            <Item 
                img={product.img}
                description={product.description}
                price={product.price}
                type={product.type}
                />
        )}
        </div>
        
    )
}

export default ProductList;