import React, { useState, useRef, useCallback } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ProductAPI from '../api/productsAPI';

import '../styles/ChangeProducts.css';


const ChangeProducts = () => {
    const INITIAL_STATE = {description: "", price: "", type: "", imgFile: "", img: ""}
    const [formData, setFormData] = useState(INITIAL_STATE);
    const fileInputRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }


    const handleFile = (e) => {
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setFormData(formData => ({...formData, imgFile: reader.result, img: file.name}))
        }
        reader.onerror = (error) => {
            console.log('Error', error)
        }
    }

  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        ProductAPI.addProduct(formData)
    }
    
    return (
        <div>
            <Form className="ChangeProducts-form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" 
                            name="description" 
                            id="Description" 
                            placeholder="Best bowl you will ever buy!" 
                            onChange={handleChange}
                            value={formData.description} />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="number" 
                            name="price" 
                            id="price" 
                            placeholder="5000.00" 
                            onChange={handleChange}
                            value={formData.price} />
                </FormGroup>
                <FormGroup>
                    <Label for="type">Type</Label>
                    <Input type="select" 
                            name="type" 
                            id="type" 
                            placeholder="Bowl" 
                            onChange={handleChange}
                            value={formData.type}>
                        <option>Bowl</option>
                        <option>Cutting Board</option>
                        <option>Bottle Stopper</option>
                        <option>Toy</option>
                        <option>Other/Don't put me in a box</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="img">Picture</Label>
                    <Input type="file" ref={fileInputRef}
                            id="img" 
                            onChange={handleFile}
                            />
                    <FormText color="muted">
                        Images should probably be less than 5mb for faster loading.
                    </FormText>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
    </div>
    );
}

export default ChangeProducts;
