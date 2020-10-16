import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import '../styles/CarouselComp.css'

const CarouselComp = () => {

    const items = [
        {
          src: `http://127.0.0.1:5000/static/images/AKBowl.jpg`,
          altText: 'Slide 1',
          key: 1
        },
        {
          src: `http://127.0.0.1:5000/static/images/EndGrainBoard.jpg`,
          altText: 'Slide 2',
          key: 2
        }

    ];
    return (
        <UncontrolledCarousel className="Carousel" items={items} />
        
    );
}

export default CarouselComp;