import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link } from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                   const {
                       id, 
                       company, 
                       img, 
                       info, 
                       price, 
                       title, 
                       inCart 
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div> 
                            </div>
                            {/* end title*/}
                            
                            {/* detalle general producto*/}
                            <div className="row">
                                {/* imagen producto*/}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>

                                {/* text producto */}
                                <div className="col-10 mx-auto col-md-6 my-3">

                                    <h2>Modelo : {title}</h2>

                                    <h4 className="text-little text-muted mt-3 mb-2">
                                        Hecho por : <span> {company} </span>
                                    </h4> 

                                    <h4 className="text-blue">
                                        <strong>
                                            Precio: <span>$</span> {price}
                                        </strong>
                                    </h4> 

                                    <hr className="mx-6 w-100"/>

                                    <p className="font-weight-bold mt-3 mb-0">
                                        Mas información acerca del producto:
                                    </p>

                                    <p className="text-muted lead">
                                        {info}
                                    </p>

                                    <hr className="mx-6 w-100"/>

                                    <div>
                                        <Link to={'/producto'}>
                                            <ButtonContainer>
                                               <i className="fas fa-arrow-circle-left"></i> {''}
                                               Regresar         
                                            </ButtonContainer>
                                        </Link>

                                        <ButtonContainer 
                                        cart
                                        disabled={inCart? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                    
                                        }}
                                        >
                                            <i className="fas fa-plus-circle"></i> {''}
                                            {inCart? 'Producto agregado' : "Agregar al carrito"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )  
                }}
            </ProductConsumer>
        )
    }
}

 