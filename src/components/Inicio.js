import React, {Fragment} from 'react';

//import fondo from '../fondo.png';
import '../App.css';
import NavFooter from './NavFooter';

import {images} from './images';
import {Gallery, GalleryImage} from 'react-gesture-gallery';



const INITIAL_INDEX = 0

export default function Inicio() {

    const [index, setIndex] = React.useState(INITIAL_INDEX)

    React.useEffect(() => {
        const interval = setInterval(() => { 
            if(index === images.length -1 ){
                setIndex(INITIAL_INDEX)
            } else {
                setIndex(index + 1)
            }
        }, 2500)
        return() => clearInterval(interval)
    }, [index])

    return (
        <Fragment>
            <div className="container py-5">
                <div className="row">
                    
                    <div style={{ background: "black", width: "60vw", height: "60vh"}}>
                        <Gallery 
                            index={index}
                            onRequestChange={i => {
                                setIndex(i);
                            }} 
                        >
                            {images.map(image  => (
                                <GalleryImage  objectFit="contain" src={image}/>
                            ))}  
                        </Gallery>
                    </div>
                
                    <hr className="mx-6 w-100"/>

                    <div className="py-5">
                        <p className="text-muted lead">
                            Somos una empresa dedicada a la venta
                            de productos tecnológicos como celulares,
                            computadoras, servidores, entre otros...
                            Así también nos comprometemos con entregar 
                            productos de calidad, a un precio accesible con forma
                            de pago através de PayPal y entregandolo hasta la
                            puerta de tu hogar sin costo alguno.
                            Todo esto desde la comodidad de tu casa y teniendo una conexión
                            a internet podrás acceder desde tu computadora, 
                            tablet o celular y poder comprar uno de nuestros
                            productos.
                            
                        </p>
                    </div>

                    <hr className="mx-6 w-100"/>
                    
                </div>
            </div>
            <NavFooter/>
         </Fragment>
    
    )
}


/*

<div className="py-5">
<img 
    src={fondo}
    alt="Fondo de inicio" 
    width= "100%" 
    height= "auto"
/>
</div>

*/
