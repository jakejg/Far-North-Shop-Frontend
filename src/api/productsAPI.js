import axios from 'axios';
import { BASE_URL }  from '../config';

class ProductsAPI {

    static async loadProducts() {
        try {
            let res = await axios.get(BASE_URL)
            return res.data
        }
        catch(e) {
            console.log(e)
        }
    }
}

export default ProductsAPI;