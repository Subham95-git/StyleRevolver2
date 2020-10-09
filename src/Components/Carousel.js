import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';

import kurta from '../Resorces/kurta.jpg';
import RayonKurta1 from '../Resorces/RayonKurta1.jpg';
import shirt1 from '../Resorces/mentshirt.jpg';
import kurta5 from '../Resorces/Kurta5.jpg';
import Brush1 from '../Resorces/brush.jpg';
import Nailpolish1 from '../Resorces/nailPolish.jpg'

const CarouselItem = ()=>{

    var item = [
        {img:kurta,
         desc:'Women Kurta Sets',
        price:750},
        {img:RayonKurta1,
         desc:'Embroidered Kurta Set ',
         price:699},
        {img:shirt1,
         desc:'Men T-Shirt',
         price:599},
        {img:kurta5,
         desc:'Women Kurtis',
         price:799},
        {
            img:Brush1,
            desc:'Makeup Brush',
            price:455 
        },
        {
            img:Nailpolish1,
            desc:'Nail polish',
            price:455
        }
    ];

    var responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 4,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 2,
            numScroll: 1
        }
    ];

    return(
        <div className="carousel-demo">
            <div className="card">
                    <Carousel value={item} numVisible={5} numScroll={1} responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate} />
                </div>
        </div>
    );
}

const productTemplate=(product)=>{

    return (
        <div className="product-item">
            <div className="product-item-content">
                <div className="p-mb-3">
                    <img src={product.img}  alt='image' className="product-image" style={{height:'200px'}}/>
                </div>
                <div>
                    <h4 className="p-mb-1">{product.desc}</h4>
                    <h6 className="p-mt-0 p-mb-3">Rs. {product.price}</h6>
                   
                    <div className="car-buttons p-mt-5">
                        <Button icon="pi pi-facebook" className="p-button p-button-rounded p-mr-2" />
                        <Button icon="pi pi-comment" className="p-button-success p-button-rounded p-mr-2" />
                        <Button icon="pi pi-heart" className="p-button-danger p-button-rounded" />
                        <Button icon="pi pi-shopping-cart" className="p-button-warning p-button-rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;