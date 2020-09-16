import React, { useState, useRef, useCallback } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import ProductAPI from '../api/productsAPI';

import '../styles/ChangeProducts.css';


const ChangeProducts = () => {
    const INITIAL_STATE = {description: "", price: "", type: "Bowl", imgFile: "", img: "", quantity: "", name: ""}
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [error, setError] = useState(false)
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
        let showError = false
        for (let key in formData) {
            if  (formData[key] === "") {
                showError = true
                setError(true)
            }
        }
        if (!showError){
            ProductAPI.addProduct(formData)
            setError(false)
        }
    }
    
    return (
        <div>
            <Form className={error ? "ChangeProducts-form error" : "ChangeProducts-form"} onSubmit={handleSubmit}>
                {error && <Alert color='danger'>Did you miss a field?</Alert>}
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
                    <Label for="quantity">Quantity</Label>
                    <Input type="number" 
                            name="quantity" 
                            id="quantity" 
                            placeholder="2" 
                            onChange={handleChange}
                            value={formData.quantity} />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="Text" 
                            name="name" 
                            id="name" 
                            placeholder="Alaska Wood Bowl" 
                            onChange={handleChange}
                            value={formData.name} />
                             <FormText color="muted">
                        Don't make this too long or it might look weird on the product page
                    </FormText>
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
