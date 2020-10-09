import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import women5 from '../Resorces/women5.jpg';
import women4 from '../Resorces/women4.jpg';
import Men1 from '../Resorces/Men1.jpg';
import sale from '../Resorces/sale.jpg';
import sale2 from '../Resorces/sale2.jpg';
import handloom from '../Resorces/handloom.jpg';
import saree from '../Resorces/saree.jpg';

export default class GalleriaThumbnailDemo extends Component {

    render() {
        return (
            <div>
                <Carousel autoPlay interval="2000" transitionTime="1000">
                    <div>
                        <img src={women5} />
                    </div>
                    <div>
                        <img src={women4} />
                    </div>
                    <div>
                        <img src={Men1} />
                    </div>
                    <div>
                        <img src={sale} />
                    </div>
                    <div>
                        <img src={sale2} />
                    </div>
                    <div>
                        <img src={handloom} />
                    </div>
                    <div>
                        <img src={saree} />
                    </div>
                </Carousel>
            </div>
        )
    };
}