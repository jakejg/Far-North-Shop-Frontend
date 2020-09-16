import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../styles/Home.css';
import CarouselComp from './CarouselComp';

const Home = () => {
    return (
        <div class="Home">
            <CarouselComp />
            <div className="Home-Text">
                <h4 className="Home-Text-Header">Welcome to Far North Wood Works Professional Website</h4>
                <p className="Home-Text-Paragraph">This is where Bace talks about his 100+ years of wood turning experience.This is where Bace talks about his 100+ years of wood turning experience.This is where Bace talks about his 100+ years of wood turning experience.
                    <br></br>
                    <br></br>
                This is where Bace talks about his 100+ years of wood turning experience.This is where Bace talks about his 100+ years of wood turning experience.This is where Bace talks about his 100+ years of wood turning experience.This is where Bace talks about his 100+ years of wood turning experience.
                    <br></br>
                    <br></br>
                This is where Bace talks about his 100+ years of wood turning experience. This is where Bace talks about his 100+ years of wood turning experience. This is where Bace talks about his 100+ years of wood turning experience.</p>
            </div>
            <hr></hr>
         
        </div>
        
    );
}

export default Home;
