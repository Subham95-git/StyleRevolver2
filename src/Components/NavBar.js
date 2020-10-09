import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import BrandImage from '../Resorces/brand.jpg';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './NavBar.css';

import FlexCard from './FlexCard';

const NavBar=()=> {

  const menuItems = [
       {label:'Home',
       icon:'pi pi-fw pi-home'},
       {
           label:'Men',
           items:[
               {label:'Shirt'},
               {label:'T-Shirt'},
               {label:'Pant'},
               {label:'Innerwear'}
           ]
       },
       {
        label:'Women',
        items:[
            {label:'Sarees'},
            {label:'Kurtis'},
            {label:'Suits & Dress Materials'},
            {label:'Westernwear'},
            {label:'Inner and Sleepwear'}
        ]
    },
    {label:'Kids'},
    {label:'Accessories'},
    {label:'Beauty'},
    {label:'Home & Kitchen'},
    {label:'Subham',
    items:[
        {label:'Profile',
        icon:'pi pi-fw pi-user'},
        {label:'Orders',
        icon:'pi pi-fw pi-briefcase'},
        {label:'Wishlist',
        icon:'pi pi-fw pi-heart'},
        {label:'Notification',
        icon:'pi pi-fw pi-bell'},
        {label:'Log Out',
        icon:'pi pi-fw pi-power-off'}
    ]
    },
    {label:'Your Cart',
    icon:'pi pi-fw pi-shopping-cart'
    }
   ];


        const start = <p className="brandname">Style Revolver</p>;
        const end = <div>
            <InputText placeholder="Search Items" type="text"></InputText>
            </div>;

        return (
            <div>
                <div className="card">
                    <Menubar  model={menuItems} start={start} end={end} />
                    {/* <FlexCard></FlexCard> */}
                </div>
            </div>
        );
    
}

export default NavBar;
